import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const desktopContainer = document.querySelector(".w-\\[430px\\]") as HTMLElement;
    if (desktopContainer) {
      desktopContainer.scrollTop = 0;
    }
  }, [location.pathname]);
};

export default useScrollToTop;
