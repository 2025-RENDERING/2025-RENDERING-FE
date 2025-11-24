import BoothMap from "@/components/booth/BoothMap";
import StudioList from "@/components/booth/StudioList";

const BoothPage = () => {
  return (
    <main className="flex flex-col justify-center px-3 pt-20 pb-[24px] md:pt-[24px]">
      <BoothMap />
      <StudioList />
    </main>
  );
};

export default BoothPage;
