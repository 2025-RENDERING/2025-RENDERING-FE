import { Fragment, useRef, useEffect, useState } from "react";

interface ScrollingLogosProps {
  logos: Array<{
    id: string;
    image?: string;
    text?: string;
  }>;
}

const ScrollingLogos = ({ logos }: ScrollingLogosProps) => {
  // 무한 스크롤을 위해 로고를 원본 + 복제본으로 구성
  const duplicatedLogos = [...logos, ...logos];
  const originalSetRef = useRef<HTMLDivElement>(null);
  const [animationDistance, setAnimationDistance] = useState("-50%");

  useEffect(() => {
    const calculateAnimation = () => {
      if (originalSetRef.current) {
        // 원본 세트의 실제 너비 측정
        const originalWidth = originalSetRef.current.offsetWidth;
        // 정확히 원본 세트만큼 이동하도록 픽셀 값으로 설정
        setAnimationDistance(`${-originalWidth}px`);
      }
    };

    // 이미지 로드 후 계산
    const timer = setTimeout(calculateAnimation, 100);

    // 리사이즈 시 재계산
    window.addEventListener("resize", calculateAnimation);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateAnimation);
    };
  }, [logos]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* 원본 세트 - 너비 측정용 (숨김) */}
      <div ref={originalSetRef} className="flex items-center absolute opacity-0 pointer-events-none" style={{ visibility: "hidden" }}>
        {logos.map((logo, index) => (
          <Fragment key={`original-${logo.id}-${index}`}>
            <div className="flex items-center shrink-0 mx-4">
              {logo.image ? (
                <img src={logo.image} alt={logo.id} className={logo.id === "photo" ? "w-[62px] h-[18px] object-contain" : "h-[39px] object-contain"} />
              ) : (
                <span className="text-s-bold text-grey-darker whitespace-nowrap">{logo.text}</span>
              )}
            </div>
            <div className="w-2 h-2 bg-red-normal shrink-0 mx-4" />
          </Fragment>
        ))}
      </div>

      {/* 실제 표시되는 로고들 */}
      <div
        className="flex items-center"
        style={{
          width: "fit-content",
          animation: `scroll-left-custom 20s linear infinite`,
          transform: "translateZ(0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <style>{`
          @keyframes scroll-left-custom {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(${animationDistance}, 0, 0);
            }
          }
        `}</style>
        {duplicatedLogos.map((logo, index) => (
          <Fragment key={`${logo.id}-${index}`}>
            <div className="flex items-center shrink-0 mx-4">
              {logo.image ? (
                <img src={logo.image} alt={logo.id} className={logo.id === "photo" ? "w-[62px] h-[18px] object-contain" : "h-[39px] object-contain"} />
              ) : (
                <span className="text-s-bold text-grey-darker whitespace-nowrap">{logo.text}</span>
              )}
            </div>
            <div className="w-2 h-2 bg-red-normal shrink-0 mx-4" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
