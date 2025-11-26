import { NavLink } from "react-router-dom";

import HomeBG from "@/assets/homePage.svg";
import Logo from "@/assets/homeLogo.png";
import HomeIcon from "@/assets/homeIcon.png";
import TextIcon from "@/assets/homeTextIcon.svg";
import CodeIcon from "@/assets/homeCodeIcon.svg";

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

  return (
    <>
      <section className="max-md:max-w-[480px] w-full max-md:m-auto relative z-20 md:z-10 md:h-[932px] md:z-10 flex flex-col justify-center max-md:h-dvh h-full overflow-y-hidden">
        <div
          className="max-md:fixed absolute inset-0 z-0 bg-cover bg-center h-dvh w-full md:z-[1]"
          style={{ backgroundImage: `url(${HomeBG})` }}
        ></div>

        <div className="max-w-[420px] w-full max-md:h-full mr-[11px] fixed z-10 flex items-center justify-center">
          <img src={HomeIcon} alt="icon" className="w-full h-full object-contain" />
        </div>

        <div className="w-full h-dvh flex flex-col items-center justify-between gap-6 relative z-10 pt-[max(13vh,35px)] pb-[35px]">
          <div className="flex flex-col items-end">
            <h1 className="text-blue-light text-[14px] max-[380px]:text-[12px] font-extrabold text-right">
              2025 덕성여자대학교 IT미디어공학전공 제13회 졸업전시회
            </h1>
            <div className="max-w-[315px] w-[73vw] mt-[18px] mb-[10px]">
              <img src={Logo} alt="RENDERING" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-blue-lightActive text-right text-[17px] font-bold tracking-[5.1px]">
              상상이 현실이 되는 순간
            </h3>
          </div>

          <img
            src={TextIcon}
            className="fixed md:absolute md:top-[649px] top-[69vh] left-[35px] z-[-1]"
          />
          <img
            src={CodeIcon}
            className="fixed md:absolute md:top-[729px] top-[77vh] left-[35px] z-[-1]"
          />

          <div className="flex flex-col gap-[20px] items-center w-full mt-[5vh]">
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
