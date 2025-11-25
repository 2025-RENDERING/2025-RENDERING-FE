interface BoothMapItemProps {
  className: string;
  num: number;
}

const BoothMapItem: React.FC<BoothMapItemProps> = ({ className, num }) => {
  return (
    <a
      href={`#${num}`}
      className={`
        border border-red-normal 
        text-red-normal text-[12px] leading-[16px] 
        flex flex-col justify-center items-center bg-red-lightHover}
        ${className}
      `}
    >
      <div className={"text-red-normal text-[12px] leading-[16px]"}>Studio</div>
      {num !== 10 && 0}
      {num}
    </a>
  );
};

export default BoothMapItem;
