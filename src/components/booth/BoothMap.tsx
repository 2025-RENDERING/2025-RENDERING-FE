import BoothMapItem from "./BoothMapItem";

const BoothMap = () => {
  return (
    <div className="h-[215px] flex justify-center items-center bg-red-light rounded-lg px-[3vw] py-[2.5vh]">
      <div className="relative w-full max-w-[300px] h-[155px]">
        <BoothMapItem className="absolute top-[0%] left-[5%] h-[40px] px-[2vw] max-w-[63px]" num={10} />

        <div className="h-[155px] flex justify-between items-end gap-[4px]">
          <BoothMapItem className="flex-[72_0_0%] h-[60px]" num={1} />

          <BoothMapItem className="flex-[52_0_0%] h-[60px]" num={2} />

          <BoothMapItem className="flex-[72_0_0%] h-[40px]" num={3} />

          <BoothMapItem className="flex-[72_0_0%] h-[40px]" num={4} />

          <div className="relative flex-[49_0_0%] h-[52px]">
            <BoothMapItem className="h-[52px] w-full z-0" num={5} />

            <BoothMapItem className="absolute top-[-56px] left-0 h-[52px] w-full z-10" num={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothMap;
