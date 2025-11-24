import { useState, useEffect } from "react";
import floatingBtn from "@/assets/floatingBtn.svg";
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;

      setIsAtBottom(isBottom);

      if (footer) {
        setFooterHeight(footer.offsetHeight);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  const spacing = 16;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-8 w-[44px] h-[44px] bg-red-normal rounded-full flex items-center justify-center shadow-lg hover:bg-red-normalHover transition-all duration-300 z-50"
      style={{
        bottom: isAtBottom ? `${footerHeight + spacing}px` : "32px",
      }}
      aria-label="맨 위로 스크롤"
    >
      <img src={floatingBtn} alt="floatingBtn" className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
