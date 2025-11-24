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

const App = () => {
  const { isMainPage, isNotFoundPage, isMenuOpen, mainClassName, containerClassName, handleMenuOpen, handleMenuClose } = useLayoutState();

  return (
    <div className={containerClassName}>
      {!isMainPage && !isNotFoundPage && <Navbar onMenuOpen={handleMenuOpen} />}
      <main className={mainClassName} aria-hidden={isMenuOpen}>
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
      </main>

      {!isMainPage && !isNotFoundPage && <Footer />}
      {!isMainPage && !isNotFoundPage && <HamburgerMenu open={isMenuOpen} onClose={handleMenuClose} />}
      {!isMainPage && !isNotFoundPage && <ScrollToTop />}
    </div>
  );
};

export default App;
