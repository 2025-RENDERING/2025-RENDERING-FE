import { useNavigate } from "react-router-dom";
import NextIcon from "@/assets/nextPoly.svg?react";
import PrevIcon from "@/assets/prevPoly.svg?react";

interface PaginationProps {
  id: number;
}

const Pagination = ({ id }: PaginationProps) => {
  const navigate = useNavigate();

  const handleMoveToPrevPage = () => {
    if (id < 2) {
      navigate(`/works/23`, { replace: true });
    } else {
      navigate(`/works/${id - 1}`, { replace: true });
    }
  };
  const handleMoveToNextPage = () => {
    if (id > 22) {
      navigate(`/works/1`, { replace: true });
    } else {
      navigate(`/works/${id + 1}`, { replace: true });
    }
  };

  return (
    <div className="flex justify-between mt-[-30px] mb-[36px]">
      <button
        className="flex items-center py-[12px] pr-[12px] gap-[6px]"
        onClick={handleMoveToPrevPage}
      >
        <PrevIcon className="w-[12px] h-[12px]" />
        <p className="text-[12px] font-bold text-red-normal50">이전</p>
      </button>
      <button
        className="flex items-center py-[12px] pl-[12px] gap-[6px]"
        onClick={handleMoveToNextPage}
      >
        <p className="text-[12px] font-bold text-red-normal50">다음</p>
        <NextIcon className="w-[12px] h-[12px]" />
      </button>
    </div>
  );
};

export default Pagination;
