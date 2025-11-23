import { useParams } from "react-router-dom";
import WorksDetailContents from "./components/works-detail/WorksDetailContents";
import Pagination from "./components/works-detail/Pagination";

const WorksDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="w-full mt-[36px]">
      <WorksDetailContents id={Number(id)} />
      <Pagination id={Number(id)} />
    </section>
  );
};

export default WorksDetailPage;
