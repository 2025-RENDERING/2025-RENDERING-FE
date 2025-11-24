import { useEffect, useState } from "react";
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
  const isWorksDetail = location.pathname.startsWith("/works/") && location.pathname !== "/works";
  const textColorClass = isExhibition ? "text-white" : "text-grey-darker";
  const iconStroke = isExhibition ? "#FFFFFF" : "#464443";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 데스크탑에서는 컨테이너 내부 스크롤, 모바일에서는 window 스크롤
      const scrollContainer = document.querySelector(".w-\\[430px\\]");
      if (scrollContainer) {
        setIsScrolled(scrollContainer.scrollTop > 0);
      } else {
        setIsScrolled(window.scrollY > 0);
      }
    };

    const scrollContainer = document.querySelector(".w-\\[430px\\]");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleBack = () => {
    if (isRoot) return;

    if (isWorksDetail) {
      navigate("/works", { replace: true });
    } else {
      navigate(-1);
    }
  };

  const getBackgroundClass = () => {
    if (isExhibition) {
      // 데스크탑에서는 항상 배경색 적용, 모바일에서는 스크롤에 따라
      return isScrolled ? "bg-blue-normal/95" : "bg-blue-normal/5 md:bg-blue-normal/95";
    }
    return "bg-grey-normal";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center px-[24px] shadow-[0_4px_15px_0_rgba(216,193,193,0.25)] md:sticky md:inset-x-auto md:w-[430px] md:shadow-none ${getBackgroundClass()} ${textColorClass}`}
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
