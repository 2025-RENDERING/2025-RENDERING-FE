import type { MouseEvent } from "react";

interface BoothMapItemProps {
  className: string;
  num: number;
}

const BoothMapItem: React.FC<BoothMapItemProps> = ({ className, num }) => {
  const scrollWithOffset = (target: HTMLElement, offset: number, behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.pageYOffset - offset,
      behavior,
    });
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const scrollContainer = document.querySelector(".w-\\[430px\\]") as HTMLElement | null;
    const mobileContainer = document.querySelector(".md\\:hidden") as HTMLElement | null;
    const isDesktopView = !!scrollContainer && window.innerWidth >= 768;
    const containerToUse = isDesktopView ? scrollContainer : mobileContainer ?? document.body;
    const target = containerToUse?.querySelector(`[id='${num}']`) as HTMLElement | null;
    if (!target) {
      return;
    }

    const scrollMarginTop = parseInt(getComputedStyle(target).scrollMarginTop || "0", 10);

    event.preventDefault();

    if (isDesktopView && scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const nextScrollTop = targetRect.top - containerRect.top + scrollContainer.scrollTop - scrollMarginTop;

      scrollContainer.scrollTo({
        top: nextScrollTop,
        behavior: "smooth",
      });
    } else {
      scrollWithOffset(target, scrollMarginTop);
    }

    window.history.replaceState(null, "", `#${num}`);
  };

  return (
    <a
      href={`#${num}`}
      onClick={handleClick}
      className={` group
        border border-red-normal 
        text-red-normal text-[12px] leading-[16px] 
        flex flex-col justify-center items-center bg-red-lightHover
        hover:bg-red-normal hover:text-grey-light
        ${className}
      `}
    >
      <div className={"text-red-normal group-hover:text-grey-light text-[12px] leading-[16px]"}>Studio</div>
      {num !== 10 && 0}
      {num}
    </a>
  );
};

export default BoothMapItem;
