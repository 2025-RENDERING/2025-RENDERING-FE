import { Fragment } from "react";
import StudioItem from "./StudioItem";
import { STUDIO_LIST } from "@/data/studioListData";

const StudioList = () => {
  return (
    <div className="flex flex-col gap-[80px] justify-center items-center mt-[71px]">
      {STUDIO_LIST.map((item, index) => (
        <Fragment key={item.studioNum}>
          <StudioItem studioId={item.studioNum} teamId={item.teamId} />
          {index !== STUDIO_LIST.length - 1 && <hr className="bg-red-normal w-[140px] h-[2px]" />}
        </Fragment>
      ))}
    </div>
  );
};

export default StudioList;
