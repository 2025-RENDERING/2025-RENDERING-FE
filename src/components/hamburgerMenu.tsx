import { useNavigate } from "react-router-dom";
import CloseIcon from "./icons/close-icon";

type HamburgerMenuProps = {
  open: boolean;
  onClose: () => void;
};

const MENU_ITEMS: Array<{ label: string; path: string }> = [
  { label: "홈", path: "/" },
  { label: "전시 소개", path: "/exhibition" },
  { label: "작품 목록", path: "/works" },
  { label: "부스 배치도", path: "/booth" },
  { label: "방명록", path: "/guestbook" },
  { label: "협찬/제휴 소개", path: "/partners" },
];

const HamburgerMenu = ({ open, onClose }: HamburgerMenuProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px] transition-opacity duration-200 ${
        open ? "pointer-events-auto opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`mx-auto w-full max-w-6xl md:w-[430px] bg-grey-light text-grey-darker transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ boxShadow: "0 0 20px 0 rgba(39, 50, 75, 0.25)" }}
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className="flex items-center justify-end px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="메뉴 닫기"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-grey-lightActive transition-colors"
          >
            <CloseIcon className="h-5 w-5" stroke="#E9471A" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-3 px-6 pb-10 text-text-l-medium text-red-normal">
          <span className="w-[111px] h-24px px-[23px] py-[1px] bg-red-normal text-white text-center mb-4">MENU</span>
          {MENU_ITEMS.map(({ label, path }) => (
            <button key={path} type="button" onClick={() => handleNavigate(path)} className="w-full rounded-lg py-2 transition-colors">
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
