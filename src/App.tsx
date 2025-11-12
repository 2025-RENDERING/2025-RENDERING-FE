import { Route, Routes } from "react-router-dom";
import MainPage from "./routes/main";
import WorksPage from "./routes/works";
import PartnersPage from "./routes/partners";
import GuestbookPage from "./routes/guestbook";
import ExhibitionPage from "./routes/exhibition";
import BoothPage from "./routes/booth";
import NotFoundPage from "./routes/notFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/guestbook" element={<GuestbookPage />} />
      <Route path="/exhibition" element={<ExhibitionPage />} />
      <Route path="/booth" element={<BoothPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
