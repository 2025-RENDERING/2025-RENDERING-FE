import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";

import MainGif2 from "@/assets/lottie/main-animation.json";
import HomeBG from "@/assets/desktopBackground.png";

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

  const [aspect, setAspect] = useState("xMidYMin slice");

  useEffect(() => {
    const updateAspect = () => {
      const width = window.innerWidth;

      if (width <= 520 || width >= 768) {
        setAspect("xMidYMin slice");
      } else {
        setAspect("xMidYMin meet");
      }
    };

    updateAspect();
    window.addEventListener("resize", updateAspect);

    return () => window.removeEventListener("resize", updateAspect);
  }, []);

  return (
    <>
      <section className="bg-[#1b4397] max-md:max-w-[430px] w-full max-md:m-auto relative z-20 md:z-10 md:z-10 flex justify-center items-center max-md:h-dvh h-full">
        <div
          className="max-md:fixed absolute inset-0 z-0 bg-cover bg-center h-dvh w-full md:z-[1]"
          style={{ backgroundImage: `url(${HomeBG})` }}
        ></div>

        <div className="md:max-w-[430px] w-full h-full md:h-[932px] fixed z-10 flex items-center justify-center -translate-y-[10vh] max-w-[]">
          <Lottie
            key={aspect}
            animationData={MainGif2}
            className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover [&>svg]:min-w-[520px]:object-contain [&>svg]:md:!object-cover"
            rendererSettings={{
              preserveAspectRatio: aspect,
            }}
          />
        </div>

        <div className="w-full h-dvh md:h-[min(932px,100dvh)] z-10">
          <div className="flex flex-col gap-[20px] items-center w-full min-[520px]:fixed min-w-[520px]:left-1/2 min-w-[520px]:-translate-x-1/2 mt-[5vh] max-md:fixed md:absolute bottom-[35px] max-[344px]:bottom-[90px]">
            {MENU_ROWS.map((row, idx) => (
              <div key={idx} className={`${row.gap} flex justify-center w-full`}>
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
