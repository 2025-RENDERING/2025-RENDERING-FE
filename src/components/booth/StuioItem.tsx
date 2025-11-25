import { PROJECT_LIST } from "@/data/projectListData";

interface StudioItemProps {
  studioId: number;
  teamId: number[];
}

const StuioItem: React.FC<StudioItemProps> = ({ studioId, teamId }) => {
  const teams = PROJECT_LIST.filter((item) => teamId.includes(item.id));

  return (
    <div className="flex flex-col gap-[32px] items-center">
      <div className="text-grey-light bg-red-normal w-fit px-2 py-1" id={`${studioId}`}>
        Studio {studioId !== 10 && 0}
        {studioId}
      </div>
      {teams.map((team) => (
        <div className="flex flex-col items-center gap-[18px]">
          <div className="text-[18px] text-blue-normal leading-[30px] font-medium">{team.teamName}</div>
          <div className="text-[14px] text-grey-darker leading-[140%] font-medium">{team.members.join(" | ")}</div>
        </div>
      ))}
    </div>
  );
};

export default StuioItem;
