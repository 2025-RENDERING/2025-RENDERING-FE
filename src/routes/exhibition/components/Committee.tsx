import Layout from "./Layout";

const Committee = () => {
  const NAMES = [
    { id: 1, role: "위원장", name: "오주현" },
    { id: 2, role: "부위원장", name: "장재희" },
    { id: 3, role: "부위원장", name: "김재희" },
  ];
  return (
    <Layout
      title="졸업준비위원회"
      content={
        <div className="flex flex-col items-center text-grey-normal">
          {NAMES.map((name) => (
            <div className="flex max-w-[153px] w-full justify-between">
              <p className="text-m-bold">{name.role}</p>
              <p className="text-m-regular">{name.name}</p>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Committee;
