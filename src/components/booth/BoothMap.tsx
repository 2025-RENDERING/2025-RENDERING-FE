import { useState } from "react";
import BoothMapItem from "./BoothMapItem";

const BoothMap = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="h-[215px] flex justify-center bg-red-light rounded-lg px-[3vw] py-[2.5vh]">
      <div className="relative w-full max-w-[300px] h-[215px]">
        <BoothMapItem className="absolute top-[0%] left-[5%] h-[40px] px-[2vw] max-w-[63px]" num={10} selected={selected === 10} onClick={setSelected} />

        <div className="h-[155px] flex justify-between items-end gap-[4px]">
          <BoothMapItem className="flex-[72_0_0%] h-[60px]" num={1} selected={selected === 1} onClick={setSelected} />

          <BoothMapItem className="flex-[52_0_0%] h-[60px]" num={2} selected={selected === 2} onClick={setSelected} />

          <BoothMapItem className="flex-[72_0_0%] h-[40px]" num={3} selected={selected === 3} onClick={setSelected} />

          <BoothMapItem className="flex-[72_0_0%] h-[40px]" num={4} selected={selected === 4} onClick={setSelected} />

          <div className="relative flex-[49_0_0%] h-[52px]">
            <BoothMapItem className="h-[52px] w-full z-0" num={5} selected={selected === 5} onClick={setSelected} />

            <BoothMapItem className="absolute top-[-56px] left-0 h-[52px] w-full z-10" num={6} selected={selected === 6} onClick={setSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothMap;
