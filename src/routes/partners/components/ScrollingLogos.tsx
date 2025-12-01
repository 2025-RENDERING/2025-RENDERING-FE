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
        if (originalWidth > 0) {
          setAnimationDistance(`${-originalWidth}px`);
        } else {
          // 너비가 0이면 다시 시도
          requestAnimationFrame(() => {
            setTimeout(calculateAnimation, 100);
          });
        }
      }
    };

    // 이미지 로드 완료 대기
    const images = originalSetRef.current?.querySelectorAll("img");
    let loadedImages = 0;
    const totalImages = images?.length || 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages || totalImages === 0) {
        // 모든 이미지가 로드되거나 이미지가 없으면 계산
        requestAnimationFrame(() => {
          setTimeout(calculateAnimation, 100);
        });
      }
    };

    if (images && images.length > 0) {
      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener("load", handleImageLoad);
          img.addEventListener("error", handleImageLoad);
        }
      });
    } else {
      // 이미지가 없으면 바로 계산
      requestAnimationFrame(() => {
        setTimeout(calculateAnimation, 200);
      });
    }

    // 리사이즈 시 재계산
    const handleResize = () => {
      requestAnimationFrame(() => {
        calculateAnimation();
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (images) {
        images.forEach((img) => {
          img.removeEventListener("load", handleImageLoad);
          img.removeEventListener("error", handleImageLoad);
        });
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [logos]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <style>{`
        @keyframes scroll-left-custom {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(${animationDistance}, 0, 0);
          }
        }
        .scrolling-logo-img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }
        .scrolling-logo-img.photo-logo {
          width: clamp(46px, 12vw, 62px);
          height: auto;
        }
        .scrolling-logo-img.normal-logo {
          height: clamp(29px, 7.5vw, 39px);
          width: auto;
        }
        .scrolling-logo-dot {
          width: clamp(6px, 1.5vw, 8px);
          height: clamp(6px, 1.5vw, 8px);
        }
        .scrolling-logo-gap {
          margin-left: clamp(8px, 2vw, 16px);
          margin-right: clamp(8px, 2vw, 16px);
        }
        @media (min-width: 768px) {
          .scrolling-logo-img.photo-logo {
            width: 62px;
          }
          .scrolling-logo-img.normal-logo {
            height: 39px;
          }
          .scrolling-logo-dot {
            width: 8px;
            height: 8px;
          }
          .scrolling-logo-gap {
            margin-left: 16px;
            margin-right: 16px;
          }
        }
      `}</style>
      {/* 원본 세트 - 너비 측정용 (숨김) */}
      <div ref={originalSetRef} className="flex items-center absolute opacity-0 pointer-events-none" style={{ visibility: "hidden" }}>
        {logos.map((logo, index) => (
          <Fragment key={`original-${logo.id}-${index}`}>
            <div className="flex items-center shrink-0 scrolling-logo-gap">
              {logo.image ? (
                <img src={logo.image} alt={logo.id} className={`scrolling-logo-img ${logo.id === "photo" ? "photo-logo" : "normal-logo"}`} />
              ) : (
                <span className="text-s-bold text-grey-darker whitespace-nowrap">{logo.text}</span>
              )}
            </div>
            <div className="scrolling-logo-dot bg-red-normal shrink-0 scrolling-logo-gap" />
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
        {duplicatedLogos.map((logo, index) => (
          <Fragment key={`${logo.id}-${index}`}>
            <div className="flex items-center shrink-0 scrolling-logo-gap">
              {logo.image ? (
                <img src={logo.image} alt={logo.id} className={`scrolling-logo-img ${logo.id === "photo" ? "photo-logo" : "normal-logo"}`} />
              ) : (
                <span className="text-s-bold text-grey-darker whitespace-nowrap">{logo.text}</span>
              )}
            </div>
            <div className="scrolling-logo-dot bg-red-normal shrink-0 scrolling-logo-gap" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
