import { useLocation, useNavigate } from "react-router-dom";
import { getPageTitle } from "../constants/pageTitles";
import BackIcon from "./icons/back-icon";
import HamburgerIcon from "./icons/hamburger-icon";

type NavbarProps = {
  onMenuOpen: () => void;
};

const Navbar = ({ onMenuOpen }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = getPageTitle(location.pathname);
  const isRoot = location.pathname === "/";
  const isExhibition = location.pathname.startsWith("/exhibition");
  const textColorClass = isExhibition ? "text-white" : "text-grey-darker";
  const iconStroke = isExhibition ? "#FFFFFF" : "#464443";

  const handleBack = () => {
    if (!isRoot) {
      navigate(-1);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center px-[24px] shadow-[0_4px_15px_0_rgba(216,193,193,0.25)] ${
        isExhibition ? "bg-blue-normal/5" : "bg-grey-normal"
      } ${textColorClass}`}
    >
      <button
        type="button"
        onClick={handleBack}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-opacity ${
          isRoot ? "pointer-events-none opacity-0" : "opacity-80"
        } ${textColorClass}`}
        aria-label="뒤로 가기"
        disabled={isRoot}
      >
        <BackIcon className="h-[14px] w-[7px]" stroke={iconStroke} />
      </button>
      <h1 className={`flex-1 text-center text-l-medium ${textColorClass}`}>{title}</h1>
      <button
        type="button"
        aria-label="메뉴 열기"
        className={`flex h-10 w-10 items-center justify-center rounded-full opacity-80 ${textColorClass}`}
        onClick={onMenuOpen}
      >
        <HamburgerIcon className="h-[14px] w-[20px]" stroke={iconStroke} />
      </button>
    </header>
  );
};

export default Navbar;
