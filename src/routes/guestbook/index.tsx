import React, { useMemo, useState } from "react";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import GuestbookList from "@/components/guestbook/GuestbookList";
import Pagination from "@/components/guestbook/Pagination";
import guestbookPages from '@/data/guestbook.json';

import lineIcon from "@/assets/lineIcon.svg";

type GuestbookPages = Record<string, Array<{
  id: string | number;
  author: string;
  content?: string;
  message?: string;
  createdAt: string;
}>>;

const GuestbookPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(() => Object.keys(guestbookPages).length, []);

  const entries = useMemo(() => {
    const pageKey = `page_${currentPage}` as keyof typeof guestbookPages;
    const pageEntries = (guestbookPages as GuestbookPages)[pageKey] as Array<{
      id: string | number;
      author: string;
      content?: string;
      message?: string;
      createdAt: string;
    }>;

    return (pageEntries ?? []).map((entry) => ({
      id: typeof entry.id === 'number' ? entry.id : parseInt(entry.id, 10),
      author: entry.author,
      message: entry.message ?? entry.content ?? '',
      createdAt: entry.createdAt,
    }));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreateSuccess = () => {
    setCurrentPage(0);
  };

  return (
    <main className="flex justify-center items-start px-[24.5px] md:flex-1">
      <div className="w-full md:w-[430px] lg:w-[430px] flex flex-col mb-[78px] pt-[64px] md:pt-0">
        <div className="flex w-full justify-center">
          <GuestbookForm onSuccess={handleCreateSuccess} />
        </div>
        <section className="mt-[64px] mb-[80px] text-center text-[14px] leading-[22px] text-blue-normal font-semibold">
          열심히 달려온 IT미디어공학전공 학우분들을 위해
          <br />
          응원의 메시지를 남겨주세요!
        </section>

        <img src={lineIcon} alt="line icon" className="mx-auto mb-[80px]" />

        <section>
          <div className="grid">
            <GuestbookList entries={entries} />
          </div>
        </section>

        <section className="mt-[48px] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
        </section>
      </div>
    </main>
  );
};

export default GuestbookPage;
