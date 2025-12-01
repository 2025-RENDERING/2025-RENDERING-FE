import { NavLink } from "react-router-dom";

import MainVideo from "@/assets/main.mp4";
import MainPosterPng from "@/assets/main-poster.png";
import MainPosterPng1x from "@/assets/main-poster-default.png";
import HomeBG from "@/assets/desktopBackground.png";
import { useState } from "react";

const MainPage = () => {
  const MENU = [
    { id: 1, label: "전시 소개", to: "/exhibition" },
    { id: 2, label: "작품 목록", to: "/works" },
    { id: 3, label: "부스 배치도", to: "/booth" },
    { id: 4, label: "방명록", to: "/guestbook" },
    { id: 5, label: "협찬/제휴 소개", to: "/partners" },
  ];

  const MENU_ROWS = [
    { items: MENU.slice(0, 3), gap: "gap-[20px]" },
    { items: MENU.slice(3), gap: "gap-[27px]" },
  ];

  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState<boolean>(false);

  return (
    <>
      <section className="bg-[#1b4397] max-md:max-w-[480px] w-full max-md:m-auto relative z-20 md:z-10 md:z-10 flex justify-center items-center max-md:h-dvh h-full">
        <div
          className="max-md:fixed absolute inset-0 z-0 bg-cover bg-center h-dvh w-full md:z-[1]"
          style={{ backgroundImage: `url(${HomeBG})` }}
        ></div>

        <div className="md:max-w-[480px] w-full h-full md:h-[932px] fixed z-10 flex items-center justify-center">
          <div className="relative w-full h-full">
            <video
              src={MainVideo}
              autoPlay
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover min-[483px]:object-contain md:!object-cover [object-position:50%_20%]`}
              onEnded={() => setIsEnded(true)}
              ref={(el) => {
                if (el) el.playbackRate = 0.6;
              }}
            />

            {isEnded && !isPosterLoaded && (
              <img
                src={MainPosterPng1x}
                alt="poster"
                className={`absolute inset-0 w-full h-full object-cover min-[483px]:object-contain md:!object-cover [object-position:50%_20%]`}
              />
            )}

            {isEnded && (
              <img
                src={MainPosterPng}
                alt="poster"
                onLoad={() => setIsPosterLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover min-[483px]:object-contain md:!object-cover [object-position:50%_20%] ${
                  isPosterLoaded ? "block" : "hidden"
                }`}
              />
            )}
          </div>
        </div>

        <div className="w-full h-dvh md:h-[min(932px,100dvh)] z-10">
          <div className="flex flex-col gap-[20px] items-center w-full min-[483px]:fixed min-[483px]:left-1/2 min-[483px]:-translate-x-1/2 mt-[5vh] max-md:fixed md:absolute bottom-[35px] max-[344px]:bottom-[90px]">
            {isEnded &&
              MENU_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className={`${row.gap} flex justify-center w-full slide-up transition-opacity duration-700`}
                >
                  {row.items.map((menu) => (
                    <NavLink
                      key={menu.id}
                      to={menu.to}
                      className="max-w-[100px] w-full h-[36px] rounded-[4px] bg-red-normal flex justify-center items-center text-xs-medium leading-[16px] text-grey-normal"
                    >
                      {menu.label}
                    </NavLink>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
