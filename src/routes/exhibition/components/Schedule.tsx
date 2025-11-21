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
          <div>
            {SCHEDULES.map((schedule) => (
              <div key={schedule.id}>
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
