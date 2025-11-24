interface DividerProps {
  icon: string;
}

const Divider = ({ icon }: DividerProps) => {
  return (
    <div className="my-[88px] flex justify-center items-center">
      <img src={icon} alt="구분선" />
    </div>
  );
};

export default Divider;
