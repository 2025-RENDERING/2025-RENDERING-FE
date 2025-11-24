import React, { useEffect, useState } from "react";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import GuestbookList from "@/components/guestbook/GuestbookList";
import Pagination from "@/components/guestbook/Pagination";
import { fetchGuestbookPage } from "@/service/api";
import { type GuestbookEntry } from "@/types/guestbook/guestbookApi";

import lineIcon from "@/assets/lineIcon.svg";

const PAGE_SIZE = 10;

const GuestbookPage: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadPage = async (page: number) => {
    try {
      setIsLoading(true);
      const data = await fetchGuestbookPage(page, PAGE_SIZE);
      setEntries(data.content);
      setTotalPages(data.totalPages);
      setCurrentPage(page);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPage(0);
  }, []);

  const handlePageChange = (page: number) => {
    loadPage(page);
  };

  const handleCreateSuccess = () => {
    loadPage(0);
  };

  return (
    <main className="flex justify-center items-center px-[24.5px]">
      <div className="w-full md:w-[430px] lg:w-[430px] flex flex-col mb-[78px] pt-[64px] md:pt-0">
        <div className="flex w-full justify-center">
          <GuestbookForm onSuccess={handleCreateSuccess} />
        </div>
        <section className="mt-[64px] mb-[80px] text-center text-[14px] leading-[22px] text-blue-normal font-semibold">
          열심히 달려온 IT미디어공학전 학우분들을 위해
          <br />
          응원의 메시지를 남겨주세요!
        </section>

        <img src={lineIcon} alt="line icon" className="mx-auto mb-[80px]" />

        <section>
          {isLoading && <p className="py-10 text-center text-sm text-gray-500">불러오는 중...</p>}

          {!isLoading && (
            <div className="grid">
              <GuestbookList entries={entries} />
            </div>
          )}
        </section>

        <section className="mt-[48px] flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
        </section>
      </div>
    </main>
  );
};

export default GuestbookPage;
