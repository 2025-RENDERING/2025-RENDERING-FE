import { useParams } from "react-router-dom";
import { PROJECT_LIST } from "@/data/projectListData";

const WorksDatailPage = () => {
  const { id } = useParams<{ id: string }>();
  const work = PROJECT_LIST.find((item) => String(item.id) === id);

  if (!work) {
    return <div className="">존재하지 않는 작품입니다.</div>;
  }

  return (
    <section className="grid grid-cols-2 gap-6">
      <p>| {work.teamName}</p>
      <h1>{work.title}</h1>
      <p>{work.oneLineDescription}</p>
    </section>
  );
};

export default WorksDatailPage;
