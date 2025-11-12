import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./routes/main";
import WorksPage from "./routes/works";
import PartnersPage from "./routes/partners";
import GuestbookPage from "./routes/guestbook";
import ExhibitionPage from "./routes/exhibition";
import BoothPage from "./routes/booth";
import NotFoundPage from "./routes/notFound";
import Footer from "./components/footer";

const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-grey-light">
      {!isMainPage && <Navbar />}
      <main className={`mx-auto w-full max-w-6xl px-8 pb-10 ${isMainPage ? "" : "pt-16 bg-grey-normal"}`}>
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
    </div>
  );
};

export default App;
