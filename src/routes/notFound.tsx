import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <h1 className="text-text-xxl-medium text-blue-normal">페이지를 찾을 수 없어요</h1>
      <p className="text-text-m-regular text-grey-dark">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link to="/" className="rounded-full bg-blue-normal px-6 py-3 text-text-s-medium text-white transition-colors hover:bg-blue-normal-hover">
        메인으로 돌아가기
      </Link>
    </section>
  );
};

export default NotFoundPage;
