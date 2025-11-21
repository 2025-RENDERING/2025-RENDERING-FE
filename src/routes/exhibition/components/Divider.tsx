interface DividerProps {
  icon: string;
}

const Divider = ({ icon }: DividerProps) => {
  return (
    <div>
      <img src={icon} alt="구분선" />
    </div>
  );
};

export default Divider;
