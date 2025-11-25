interface BoothMapItemProps {
  className: string;
  num: number;
  selected?: boolean;
  onClick?: (num: number) => void;
}

const BoothMapItem: React.FC<BoothMapItemProps> = ({ className, num, selected, onClick }) => {
  return (
    <a
      href={`#${num}`}
      onClick={() => onClick?.(num)}
      className={`
        border border-red-normal 
        text-red-normal text-[12px] leading-[16px] 
        flex flex-col justify-center items-center 
        ${selected ? "bg-red-normal text-white" : "bg-red-lightHover hover:bg-red-lightActive"}
        ${className}
      `}
    >
      <div className={`${selected ? "text-white" : "text-red-normal"} text-[12px] leading-[16px]`}>Studio</div>
      {num !== 10 && 0}
      {num}
    </a>
  );
};

export default BoothMapItem;
