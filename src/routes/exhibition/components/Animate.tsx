interface AnimateProps {
  Icon: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
  };
  exit?: string;
  isClicked: boolean;
}

const Animate = ({ Icon, position, exit, isClicked }: AnimateProps) => {
  return (
    <div
      style={{
        top: position?.top,
        left: position?.left,
        right: position?.right,
      }}
      className={`
        absolute z-30
        transition-all duration-700 ease-out transform
        ${isClicked ? "opacity-100 translate-x-0 translate-y-0" : `${exit} opacity-0`}
      `}
    >
      <img src={Icon} alt="icon" className="w-full h-full" />
    </div>
  );
};

export default Animate;
