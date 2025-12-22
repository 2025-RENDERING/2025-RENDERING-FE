import { useState, type FormEvent } from 'react';
import { type GuestbookFormProps } from '@/types/guestbook/guestbookForm';

const MAX_AUTHOR = 10;
const MAX_MESSAGE = 100;

const GuestbookForm: React.FC<GuestbookFormProps> = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting,] = useState(false);
  const isDisabled = true;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[382px] mt-[55px]">
      <div>
        <input
          className="w-[172px] h-[32px] rounded-none border-none px-[14px] py-[1px] bg-red-normal text-[14px] text-grey-lightActive font-medium outline-none placeholder:text-red-lightActive disabled disabled:text-grey-lightActive disabled:cursor-not-allowed"
          placeholder={isDisabled ? '' : '작성자 (10자 이내)'}
          maxLength={MAX_AUTHOR}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled
        />
      </div>

      <div>
        <textarea
          className="h-[80px] w-full resize-none rounded-none border border-red-normal bg-grey-normal p-[14px] text-[14px] placeholder:text-grey-dark outline-none scrollbar-hide disabled  disabled:cursor-not-allowed"
          placeholder="2025 덕성여자대학교 IT미디어공학전공 제13회 졸업전시회가 종료되었습니다."
          maxLength={MAX_MESSAGE}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled
        />

      <button
        type="submit"
        disabled={true}
        className="w-[112px] border border-red-normal bg-red-light text-red-normal ml-auto mt-2 block rounded-[4px] px-6 py-2 text-[12px] font-medium disabled:cursor-not-allowed pointer-events-none"
      >
        {isSubmitting ? '등록 중...' : '보내기'}
      </button>
      </div>
    </form>
  );
};

export default GuestbookForm;