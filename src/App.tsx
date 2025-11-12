import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./routes/main";
import WorksPage from "./routes/works";
import PartnersPage from "./routes/partners";
import GuestbookPage from "./routes/guestbook";
import ExhibitionPage from "./routes/exhibition";
import BoothPage from "./routes/booth";
import NotFoundPage from "./routes/notFound";
import Footer from "./components/footer";
import HamburgerMenu from "./components/hamburgerMenu";
import useLayoutState from "./hooks/useLayoutState";

const App = () => {
  const { isMainPage, isMenuOpen, mainClassName, containerClassName, handleMenuOpen, handleMenuClose } = useLayoutState();

  return (
    <div className={containerClassName}>
      {!isMainPage && <Navbar onMenuOpen={handleMenuOpen} />}
      <main className={mainClassName} aria-hidden={isMenuOpen}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/guestbook" element={<GuestbookPage />} />
          <Route path="/exhibition" element={<ExhibitionPage />} />
          <Route path="/booth" element={<BoothPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isMainPage && <Footer />}
      {!isMainPage && <HamburgerMenu open={isMenuOpen} onClose={handleMenuClose} />}
    </div>
  );
};

export default App;
