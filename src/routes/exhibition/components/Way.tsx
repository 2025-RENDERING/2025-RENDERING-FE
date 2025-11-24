import { useEffect } from "react";
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

  useEffect(() => {
    const script = document.createElement("script");
    script.async = false;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
    }&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) return;

        const markerPos = new window.kakao.maps.LatLng(37.6553762, 127.0480035); // 마커 위치
        const marker = {
          position: markerPos,
        }; // 지도에 표시할 마커

        const options = {
          center: new window.kakao.maps.LatLng(37.6553762, 127.0480035),
          level: 3,
          marker: marker,
        };

        new window.kakao.maps.StaticMap(container, options); // 지도 생성
      });
    };

    return () => {
      document.head.removeChild(script);
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

          <div id="map" className="w-full h-[257px]"></div>

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
