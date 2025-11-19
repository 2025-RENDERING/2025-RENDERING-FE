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
    <>
      <img src={imageSrc} alt="썸네일 이미지" />
      <p>{teamName}</p>
      <h1 className="text-text-xxl-medium">{title}</h1>
      <p className="text-text-m-regular text-grey-dark">{oneLineDescription}</p>
    </>
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
