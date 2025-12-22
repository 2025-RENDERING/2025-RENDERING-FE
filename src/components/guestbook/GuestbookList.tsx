import React from 'react';
import GuestbookCard from '@/components/guestbook/GuestbookCard';
import guestbookPages from '@/data/guestbook.json';
import { type GuestbookListProps } from '@/types/guestbook/guestbookList';
import { type GuestbookEntry } from '@/types/guestbook/guestbookApi';


type Props = Partial<GuestbookListProps>;

const GuestbookList: React.FC<Props> = ({ entries }) => {
  const fallbackEntries = React.useMemo(() => {
    const pages = guestbookPages as unknown as Record<string, unknown[]>;
    return Object.values(pages).flat();
  }, []);

  const list = (entries ?? fallbackEntries) as GuestbookEntry[];

  return (
    <div className="grid grid-cols-2 gap-x-[25px] gap-y-[36px] w-full max-w-[382px] mx-auto">
      {list.map((entry) => (
        <GuestbookCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default GuestbookList;