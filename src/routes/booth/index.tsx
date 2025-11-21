import BoothMap from "@/components/booth/BoothMap";
import StudioList from "@/components/booth/StudioList";

const BoothPage = () => {
  return (
    <main className="flex flex-col justify-center px-3">
      <BoothMap />
      <StudioList />
    </main>
  );
};

export default BoothPage;
