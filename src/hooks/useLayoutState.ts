import { useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const useLayoutState = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => setMenuOpen(true), []);
  const handleMenuClose = useCallback(() => setMenuOpen(false), []);

  const mainClassName = useMemo(() => {
    const base = "mx-auto w-full max-w-6xl px-[24px] pb-10";
    const layout = isMainPage ? "" : "pt-16 bg-grey-normal";
    const overlayState = isMenuOpen ? "pointer-events-none blur-sm" : "";
    return [base, layout, overlayState].filter(Boolean).join(" ");
  }, [isMainPage, isMenuOpen]);

  const containerClassName = useMemo(() => {
    const base = "min-h-screen bg-grey-light";
    return isMenuOpen ? `${base} overflow-hidden` : base;
  }, [isMenuOpen]);

  return {
    isMainPage,
    isMenuOpen,
    mainClassName,
    containerClassName,
    handleMenuOpen,
    handleMenuClose,
  };
};

export default useLayoutState;
