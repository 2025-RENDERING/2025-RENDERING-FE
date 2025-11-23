import { useNavigate } from "react-router-dom";
import { PROJECT_LIST } from "@/data/projectListData";

interface WorksCardProps {
  id: number;
  thumbnailImageUrl: string;
  teamName: string;
  title: string;
  oneLineDescription: string;
}

const WorksCard = ({
  id,
  thumbnailImageUrl,
  teamName,
  title,
  oneLineDescription,
}: WorksCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const imageSrc = new URL(thumbnailImageUrl, import.meta.url).href;

  return (
    <button
      className="w-full h-auto flex flex-col items-start"
      onClick={() => handleNavigate(`/works/${id}`)}
    >
      <img className="w-full h-auto rounded-[4px]" src={imageSrc} alt="썸네일 이미지" />
      <div className="flex-col items-start w-full flex flex-col mt-[14px] gap-y-[10px]">
        <p className="w-full text-left text-[12px] font-bold text-red-normal">| {teamName}</p>
        <h1 className="w-full text-left text-[16px] font-bold text-blue-normal">{title}</h1>
        <p className="w-full text-left text-[12px] font-medium text-grey-darkActive">
          {oneLineDescription}
        </p>
      </div>
    </button>
  );
};

interface WorksListProps {
  submittedText: string;
}

const WorksList = ({ submittedText }: WorksListProps) => {
  const keyword = submittedText.trim().toLowerCase();

  const filteredProjects = PROJECT_LIST.filter((item) => {
    if (!keyword) return true;
    return (
      item.title.toLowerCase().includes(keyword) || item.teamName.toLowerCase().includes(keyword)
    );
  });

  if (filteredProjects.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <div className="w-full grid grid-cols-2 gap-6">
      {filteredProjects.map((item) => (
        <WorksCard
          key={item.id}
          id={item.id}
          thumbnailImageUrl={item.thumbnailImageUrl}
          teamName={item.teamName}
          title={item.title}
          oneLineDescription={item.oneLineDescription}
        />
      ))}
    </div>
  );
};

export default WorksList;
