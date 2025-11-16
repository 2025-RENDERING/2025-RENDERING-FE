import React from 'react';
import { type PaginationProps } from '@/types/guestbook/pagination';

import NextIcon from '@/assets/next.svg?react';
import PrevIcon from '@/assets/prev.svg?react';


const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (uiPage: number) => {
    if (uiPage < 1 || uiPage > totalPages) return;
    onChange(uiPage - 1);
  };

  return (
    <div className="flex items-center justify-center text-[12px]">
      <button
        type="button"
        disabled={currentPage === 0}
        onClick={() => handleClick(currentPage)}
        className="mr-[10px] flex items-center justify-center rounded-full text-red-normal disabled:opacity-50"
      >
        <PrevIcon className="w-[6.435px] h-[12.87px] text-red-500" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handleClick(page)}
          className={
            page === currentPage + 1
              ? 'flex mx-[6px] items-center justify-center text-red-normal'
              : 'flex mx-[6px] items-center justify-center text-red-normal opacity-50'
          }
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages - 1}
        onClick={() => handleClick(currentPage + 2)}
        className="ml-[10px] flex items-center justify-center rounded-full text-red-normal disabled:opacity-50"
      >
        <NextIcon className="w-[6.435px] h-[12.87px]" />
      </button>
    </div>
  );
};

export default Pagination;