interface BoothMapItemProps {
  className: string;
  num: number;
}

const BoothMapItem: React.FC<BoothMapItemProps> = ({ className, num }) => {
  return (
    <div className={` border border-red-normal text-red-normal text-[12px] leading-[16px] flex flex-col justify-center items-center ${className}`}>
      <div className="text-red-normal text-[12px] leading-[16px]">Studio</div>
      {num}
    </div>
  );
};

export default BoothMapItem;
