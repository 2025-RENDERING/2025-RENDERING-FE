import { useEffect, useRef } from "react";
import Layout from "./Layout";

import SubwayIcon from "@/assets/subwayIcon.svg?react";
import BusIcon from "@/assets/busIcon.svg?react";

const Way = () => {
  const TRANSPORTATION = [
    {
      id: 1,
      icon: <SubwayIcon className="shrink-0" />,
      text: <p>1호선, 4호선 창동역</p>,
    },
    {
      id: 2,
      icon: <BusIcon className="shrink-0" />,
      text: (
        <div>
          <p>1119, 1120, 1129, 1142</p>
          <p>노원 05, 노원 08, 노원 15, 도봉 01, 도봉 08, 도봉 09</p>
        </div>
      ),
    },
  ];

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = false;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
    }&autoload=false`;
    document.head.appendChild(script);

    const tryCreateMap = () => {
      const container = mapRef.current;
      if (!container) return false;
      if (container.offsetWidth === 0 || container.offsetHeight === 0) return false;

      if (mapRef.current) {
        container.innerHTML = "";
      }

      const markerPos = new window.kakao.maps.LatLng(37.6553762, 127.0480035);
      const marker = { position: markerPos };
      const options = {
        center: markerPos,
        level: 3,
        marker,
      };

      new window.kakao.maps.StaticMap(container, options);
      return true;
    };

    const handleResize = () => tryCreateMap();

    script.onload = () => {
      window.kakao.maps.load(() => {
        // 즉시 생성 시도
        if (!tryCreateMap()) {
          // 실패 -> ResizeObserver
          const container = mapRef.current;
          if (!container) return;

          const observer = new ResizeObserver(() => {
            if (tryCreateMap()) observer.disconnect();
          });
          observer.observe(container);
        }

        window.addEventListener("resize", handleResize);
      });
    };

    return () => {
      document.head.removeChild(script);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout
      title="오시는 길"
      content={
        <div className="flex flex-col gap-[24px] text-s-medium leading-[19.6px]">
          <div className=" text-grey-normal text-center">
            <p>서울 도봉구 마들로 13길 84</p>
            <p>서울창업허브 창동 B1</p>
          </div>

          <div id="map" ref={mapRef} className="w-full h-[257px]"></div>

          <div className="flex flex-col gap-[16px]">
            {TRANSPORTATION.map((t) => (
              <div key={t.id} className="flex gap-[24px] text-blue-lightHover">
                {t.icon}
                {t.text}
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default Way;
