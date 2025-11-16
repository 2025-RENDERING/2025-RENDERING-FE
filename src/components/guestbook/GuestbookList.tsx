import React from 'react';
import GuestbookCard from '@/components/guestbook/GuestbookCard';
import { type GuestbookListProps } from '@/types/guestbook/guestbookList';


const GuestbookList: React.FC<GuestbookListProps> = ({ entries }) => {

  return (
    <div className="grid grid-cols-2 gap-x-[25px] gap-y-[36px]">
      {entries.map((entry) => (
        <GuestbookCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default GuestbookList;