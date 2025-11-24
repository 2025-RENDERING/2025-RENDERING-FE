import SearchIcon from "@/assets/search.svg?react";

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setSubmittedText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchText, setSearchText, setSubmittedText }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedText(searchText);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center mr-[8px]">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="검색어를 입력하세요."
        className={`w-[232px] h-[36px] py-[10px] pl-[16px] px-[40px] rounded-[50px] outline-none bg-grey-lightActive text-[12px] font-medium ${
          searchText.length > 0 ? "text-grey-darkActive" : "text-grey-dark"
        }`}
      />
      <SearchIcon
        onClick={() => setSubmittedText(searchText)}
        className="ml-[-32px] w-[24px] h-[24px] cursor-pointer "
      />
    </form>
  );
};

export default SearchBar;
