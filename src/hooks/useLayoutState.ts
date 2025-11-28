import { useCallback, useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLayoutState = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const validPaths = ["/", "/works", "/partners", "/guestbook", "/exhibition", "/booth"];
  const isNotFoundPage = !validPaths.some((path) => location.pathname === path || location.pathname.startsWith("/works/"));
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => setMenuOpen(true), []);
  const handleMenuClose = useCallback(() => setMenuOpen(false), []);

  const mainClassName = useMemo(() => {
    if (isNotFoundPage) {
      return "w-full md:h-full";
    }
    const base = "mx-auto w-full max-w-6xl";
    const layout = isMainPage ? "" : "bg-grey-normal";
    const overlayState = isMenuOpen ? "pointer-events-none blur-sm" : "";
    return [base, layout, overlayState].filter(Boolean).join(" ");
  }, [isMainPage, isNotFoundPage, isMenuOpen]);

  const containerClassName = useMemo(() => {
    const base = "min-h-dvh bg-grey-light";
    return isMenuOpen ? `${base} overflow-hidden` : base;
  }, [isMenuOpen]);

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-bg");
    } else {
      document.body.classList.remove("home-bg");
    }

    return () => {
      document.body.classList.remove("home-bg");
    };
  }, [location.pathname]);

  return {
    isMainPage,
    isNotFoundPage,
    isMenuOpen,
    mainClassName,
    containerClassName,
    handleMenuOpen,
    handleMenuClose,
  };
};

export default useLayoutState;
