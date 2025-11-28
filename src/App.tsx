import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./routes/main";
import WorksPage from "./routes/works";
import WorksDetailPage from "./routes/works/detail";
import PartnersPage from "./routes/partners";
import GuestbookPage from "./routes/guestbook";
import ExhibitionPage from "./routes/exhibition";
import BoothPage from "./routes/booth";
import NotFoundPage from "./routes/notFound";
import Footer from "./components/footer";
import HamburgerMenu from "./components/hamburgerMenu";
import ScrollToTop from "./components/ScrollToTop";
import useLayoutState from "./hooks/useLayoutState";
import useScrollToTop from "./hooks/useScrollToTop";
import desktopBG from "@/assets/desktopBackground.png";
import rendSVG from "@/assets/rend.svg";
import eringSVG from "@/assets/ering.svg";

const App = () => {
  const { isMainPage, isNotFoundPage, isMenuOpen, mainClassName, containerClassName, handleMenuOpen, handleMenuClose } = useLayoutState();

  useScrollToTop();

  const routes = (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/works/:id" element={<WorksDetailPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/guestbook" element={<GuestbookPage />} />
      <Route path="/exhibition" element={<ExhibitionPage />} />
      <Route path="/booth" element={<BoothPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );

  const commonComponents = (
    <>
      {!isMainPage && !isNotFoundPage && <Navbar onMenuOpen={handleMenuOpen} />}
      <main className={mainClassName} aria-hidden={isMenuOpen}>
        {routes}
      </main>
      {!isMainPage && !isNotFoundPage && <Footer />}
      {!isMainPage && !isNotFoundPage && <HamburgerMenu open={isMenuOpen} onClose={handleMenuClose} />}
      {!isMainPage && !isNotFoundPage && <ScrollToTop />}
    </>
  );

  const desktopContentClassName = [
    "w-[430px]",
    isNotFoundPage ? "h-screen" : "h-[min(932px,100dvh)]",
    isMainPage || isNotFoundPage ? "overflow-hidden" : "overflow-y-auto",
    "overflow-x-hidden",
    "md:pointer-events-auto",
    "relative",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* 데스크탑 배경 레이어 - 가장 아래 고정 배경 */}
      <div
        className="hidden md:block md:fixed md:inset-0 md:z-0"
        style={{
          backgroundImage: `url(${desktopBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* RENDERING 텍스트 오버레이 */}
        <div className="absolute inset-0 flex items-center justify-between px-8 opacity-90 pointer-events-none">
          <div style={{ position: "absolute", top: "30%", left: "10%", transform: "translateY(-50%)" }}>
            <p className="text-blue-lightHover text-m-bold mb-[16px] opacity-50">상상이 현실이 되는 순간</p>
            <img src={rendSVG} alt="REND" className="h-auto max-h-[132px]" />
          </div>
          <div style={{ position: "absolute", top: "70%", right: "10%", transform: "translateY(-50%)" }} className="flex flex-col items-end">
            <img src={eringSVG} alt="ERING" className="h-auto max-h-[132px]" />
            <p className="text-blue-lightHover text-m-bold mt-[16px] text-right opacity-50">2025 덕성여자대학교 IT미디어공학전공 제13회 졸업전시회</p>
          </div>
        </div>
      </div>

      {/* 데스크탑 중앙 스크롤 컨테이너 */}
      <div className="hidden md:flex md:items-center md:justify-center md:fixed md:inset-0 md:z-10 md:overflow-hidden md:overflow-x-hidden md:pointer-events-none">
        <div className={desktopContentClassName} style={{ boxShadow: "0 0 20px 0 rgba(39, 50, 75, 0.25)" }}>
          {commonComponents}
        </div>
      </div>

      {/* 모바일 레이아웃 */}
      <div className={containerClassName}>
        <div className="md:hidden">{commonComponents}</div>
      </div>
    </>
  );
};

export default App;
