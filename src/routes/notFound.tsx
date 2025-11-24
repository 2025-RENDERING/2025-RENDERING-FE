import { Link } from "react-router-dom";
import mainBG from "@/assets/main.png";
import notFoundBG from "@/assets/notFound.svg";
import notFound404 from "@/assets/notFound404.svg";

const NotFoundPage = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-center"
      style={{ backgroundImage: `url(${mainBG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: `url(${notFoundBG})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      />
      <div className="flex flex-col items-center justify-center gap-6 z-10 relative">
        <img src={notFound404} alt="404" className="w-auto h-auto" />
        <p className="text-text-s-semibold text-blue-light">요청하신 페이지를 찾을 수 없습니다.</p>
        <Link to="/" className="rounded-[4px] bg-red-normal px-12 py-2 text-text-s-medium text-white transition-colors hover:bg-red-normalHover">
          메인 페이지로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
