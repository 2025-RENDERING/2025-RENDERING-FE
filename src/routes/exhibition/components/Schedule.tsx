import Layout from "./Layout";

const Schedule = () => {
  const SCHEDULES = [
    { id: 1, date: "2025.12.17.(수)", time: "10:00 - 17:00" },
    { id: 2, date: "2025.12.18.(목)", time: "10:00 - 17:00" },
    { id: 3, date: "2025.12.19.(금)", time: "10:00 - 17:00" },
  ];
  return (
    <>
      <Layout
        title="전시 일정"
        content={
          <div className="flex flex-col items-center gap-[12px]">
            {SCHEDULES.map((schedule) => (
              <div
                key={schedule.id}
                className="max-w-[382px] flex justify-between w-full border border-red-normal bg-[rgba(244,198,185,0.1)] py-[7px] px-[48px] text-grey-normal text-s-bold"
              >
                <p>{schedule.date}</p>
                <p>{schedule.time}</p>
              </div>
            ))}
          </div>
        }
      />
    </>
  );
};

export default Schedule;
