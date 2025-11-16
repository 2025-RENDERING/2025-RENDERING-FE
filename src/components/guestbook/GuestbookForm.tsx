import { useState, type FormEvent } from 'react';
import { createGuestbook } from '@/service/api';
import { type GuestbookFormProps } from '@/types/guestbook/guestbookForm';

const MAX_AUTHOR = 10;
const MAX_MESSAGE = 100;

const GuestbookForm: React.FC<GuestbookFormProps> = ({ onSuccess }) => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await createGuestbook({ author: author.trim(), message: message.trim() });
      setAuthor('');
      setMessage('');
      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[354px] mx-auto space-y-3">
      <div>
        <input
          className="w-[172px] rounded-none border-none px-4 py-3 bg-red-normal text-[14px] font-medium text-red-lightActive outline-none placeholder:text-red-lightActive"
          placeholder="작성자 (10자 이내)"
          maxLength={MAX_AUTHOR}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className='max-w-[354px]'>
        <textarea
          className="h-[80px] w-full resize-none rounded-none border border-red-normal bg-grey-normal p-[14px] text-[14px] text-grey-dark placeholder:text-grey-dark outline-none scrollbar-hide"
          placeholder="방명록을 남겨 주세요.(100자 이내)"
          maxLength={MAX_MESSAGE}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

      <button
        type="submit"
        disabled={
          isSubmitting ||
          !author.trim() ||
          !message.trim() ||
          author.length > MAX_AUTHOR ||
          message.length > MAX_MESSAGE
        }
        className="w-[112px] border border-red-normal bg-red-light text-red-normal ml-auto mt-2 block rounded-[4px] px-6 py-2 text-[12px] font-medium disabled:cursor-not-allowed"
      >
        {isSubmitting ? '등록 중...' : '보내기'}
      </button>
      </div>
    </form>
  );
};

export default GuestbookForm;