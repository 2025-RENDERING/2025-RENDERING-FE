import { PROJECT_LIST } from "@/data/projectListData";

interface WorksCardProps {
  thumbnailImageUrl: string;
  teamName: string;
  title: string;
  oneLineDescription: string;
}

const WorksCard = ({ thumbnailImageUrl, teamName, title, oneLineDescription }: WorksCardProps) => {
  const imageSrc = new URL(thumbnailImageUrl, import.meta.url).href;

  return (
    <div className="w-full h-auto">
      <img className="w-full h-auto rounded-[4px]" src={imageSrc} alt="썸네일 이미지" />
      <div className="w-full flex flex-col mt-[14px] gap-y-[10px]">
        <p className="w-full text-[12px] font-bold text-red-normal">| {teamName}</p>
        <h1 className="w-full text-[16px] font-bold text-blue-normal">{title}</h1>
        <p className="text-text-m-regular text-grey-darkActive">{oneLineDescription}</p>
      </div>
    </div>
  );
};

const WorksList = () => {
  return (
    <>
      {PROJECT_LIST.map((item) => (
        <WorksCard
          key={item.id}
          thumbnailImageUrl={item.thumbnailImageUrl}
          teamName={item.teamName}
          title={item.title}
          oneLineDescription={item.oneLineDescription}
        />
      ))}
    </>
  );
};

export default WorksList;
