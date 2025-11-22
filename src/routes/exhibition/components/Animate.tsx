interface AnimateProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
    <Icon
      className={`absolute ${position?.top ? `top-[${position.top}]` : ""}
      ${position?.left ? `left-[${position.left}]` : ""}
      ${position?.right ? `right-[${position.right}]` : ""}
      transition-all duration-700 ease-out transform
      ${isClicked ? "opacity-100 translate-x-0 translate-y-0" : `${exit} opacity-0`}
      `}
    ></Icon>
  );
};

export default Animate;
