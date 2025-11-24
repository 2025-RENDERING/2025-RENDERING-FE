import { type GuestbookCardProps } from '@/types/guestbook/guestbookCard';

const formatDate = (iso: string) => iso.slice(0, 10).replaceAll('-', '.');

const GuestbookCard: React.FC<GuestbookCardProps> = ({ entry }) => {
  return (
      <div className="flex flex-col">
        <div
          className="max-w-[131px] max-[352px]:max-w-[178px] flex min-h-[22px] items-center py-[3px] px-[12px] text-[12px] font-bold text-grey-lightActive bg-red-normal"
        >
          {entry.author}
        </div>

      <div
        className="relative flex flex-col border border-red-normal max-w-[178px] h-[171px] "
      >
          <div className=" h-[125px] px-[12px] mt-[11px] text-[12px] leading-[16px] overflow-scroll scrollbar-hide">
            {entry.message}
          </div>
          <div className="absolute bottom-[10px] right-[13px] text-right text-[12px] text-grey-dark">
            {formatDate(entry.createdAt)}
          </div>
      </div>
    </div>
  );
};

export default GuestbookCard;