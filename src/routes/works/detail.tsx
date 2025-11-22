import { useParams } from "react-router-dom";
import WorksDetailContents from "./components/works-detail/WorksDetailContents";

const WorksDatailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="w-full">
      <WorksDetailContents id={Number(id)} />
    </section>
  );
};

export default WorksDatailPage;
