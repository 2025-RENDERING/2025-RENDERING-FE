import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import floatingBtn from "@/assets/floatingBtn.svg";
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [desktopOffset, setDesktopOffset] = useState({ bottom: 0, right: 32 });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const footer = document.querySelector("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }

    const toggleVisibility = () => {
      const scrollContainer = document.querySelector(".w-\\[430px\\]");
      const currentIsDesktop = window.innerWidth >= 768;
      let scrollTop = 0;
      let scrollHeight = 0;
      let clientHeight = 0;

      if (scrollContainer && currentIsDesktop) {
        // 데스크탑: 컨테이너 내부 스크롤
        scrollTop = scrollContainer.scrollTop;
        scrollHeight = scrollContainer.scrollHeight;
        clientHeight = scrollContainer.clientHeight;
        const verticalOffset = Math.max(0, (window.innerHeight - scrollContainer.clientHeight) / 2);
        const horizontalOffset = Math.max(0, (window.innerWidth - scrollContainer.clientWidth) / 2);
        setDesktopOffset({
          bottom: verticalOffset,
          right: horizontalOffset + 16,
        });
      } else {
        // 모바일: window 스크롤
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = window.innerHeight;
        setDesktopOffset({ bottom: 0, right: 32 });
      }

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsAtBottom(isBottom);

      if (footer) {
        setFooterHeight(footer.offsetHeight);
      }
    };

    const scrollContainer = document.querySelector(".w-\\[430px\\]");
    const currentIsDesktop = window.innerWidth >= 768;
    if (scrollContainer && currentIsDesktop) {
      scrollContainer.addEventListener("scroll", toggleVisibility);
    }
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);

    toggleVisibility();

    return () => {
      if (scrollContainer && currentIsDesktop) {
        scrollContainer.removeEventListener("scroll", toggleVisibility);
      }
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
      window.removeEventListener("resize", checkDesktop);
    };
  }, [isDesktop]);

  useEffect(() => {
    setIsVisible(false);
    setIsAtBottom(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".w-\\[430px\\]");
    const currentIsDesktop = window.innerWidth >= 768;
    if (scrollContainer && currentIsDesktop) {
      // 데스크탑: 컨테이너 내부 스크롤
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // 모바일: window 스크롤
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  const spacing = 16;
  const baseBottom = isAtBottom ? footerHeight + spacing : 32;
  const computedBottom = isDesktop ? desktopOffset.bottom + baseBottom : baseBottom;
  const computedRight = isDesktop ? desktopOffset.right : 32;

  return (
    <button
      onClick={scrollToTop}
      className="fixed w-[44px] h-[44px] bg-red-normal rounded-full flex items-center justify-center shadow-lg hover:bg-red-normalHover transition-all duration-300 z-50"
      style={{
        bottom: `${computedBottom}px`,
        right: `${computedRight}px`,
      }}
      aria-label="맨 위로 스크롤"
    >
      <img src={floatingBtn} alt="floatingBtn" className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
