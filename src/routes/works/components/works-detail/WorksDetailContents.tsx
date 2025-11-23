import { useNavigate } from "react-router-dom";
import { PROJECT_LIST } from "@/data/projectListData";

interface WorksDetailContentsProps {
  id: number;
}

const WorksDetailContents = ({ id }: WorksDetailContentsProps) => {
  const navigate = useNavigate();
  const work = PROJECT_LIST.find((item) => item.id === id);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  if (!work) {
    return <div className="">존재하지 않는 작품입니다.</div>;
  }

  const imageSrc = new URL(work.thumbnailImageUrl, import.meta.url).href;

  return (
    <div className="w-full h-auto" onClick={() => handleNavigate(`/works/${work.id}`)}>
      <img className="w-full h-auto mb-[36px] rounded-[8px]" src={imageSrc} alt="썸네일 이미지" />

      <p className="w-full mb-[4px] text-[14px] font-bold text-red-normal">| {work.teamName}</p>
      <h1 className="w-full mb-[10px] text-[20px] font-semibold text-blue-normal">{work.title}</h1>
      <p className="w-full mb-[16px] text-[14px] text-text-m-medium text-grey-darkActive">
        {work.oneLineDescription}
      </p>

      {/* 키워드 */}
      <div className="mb-[48px] flex flex-wrap gap-[11px] text-[12px] font-medium">
        {work.tags.map((tag, index) => (
          <p
            key={index}
            className="py-[4px] px-[14px] rounded-[40px] border border-[1px] border-blue-normal"
          >
            {tag}
          </p>
        ))}
      </div>

      {/* 팀원 */}
      <div className="w-full pb-[36px] mb-[54px] border-b-[1px] border-red-lightActive">
        <div className="flex justify-center w-[84px] mb-[22px] py-[2px] text-[14px] font-medium text-grey-light bg-red-normal">
          팀원
        </div>
        {work.members.map((member, index) => (
          <span key={index} className="pr-[5px] text-[14px] font-medium text-grey-darker">
            | {member}
          </span>
        ))}
      </div>

      {/* 작품 목록 */}
      <div className="w-full pb-[36px] mb-[54px] border-b-[1px] border-red-lightActive">
        <div className="flex justify-center w-[84px] mb-[22px] py-[2px] text-[14px] font-medium text-grey-light bg-red-normal">
          작품 목록
        </div>
        <p className="pr-[5px] text-[14px] font-medium text-grey-darker">
          {work.projectDescription}
        </p>
      </div>

      {/* 작품 설명 */}
      <div className="w-full pb-[36px] mb-[54px] border-b-[1px] border-red-lightActive">
        <div className="flex justify-center w-[84px] mb-[22px] py-[2px] text-[14px] font-medium text-grey-light bg-red-normal">
          작품 소개
        </div>
        <p className="pr-[5px] text-[14px] font-medium text-grey-darker">{work.projectIntent}</p>
      </div>
    </div>
  );
};

export default WorksDetailContents;
