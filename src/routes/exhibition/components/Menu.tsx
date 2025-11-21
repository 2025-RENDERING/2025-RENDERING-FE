import HomeIcon from "@/assets/homeIcon.svg?react";
import KakaoIcon from "@/assets/kakoIcon.svg?react";
import InstaIcon from "@/assets/instaIcon.svg?react";

const Menu = () => {
  const MENU = [
    {
      id: 1,
      icon: <HomeIcon />,
      label: "학과 홈페이지",
      to: "https://www.duksung.ac.kr/itmedia/main.do",
    },
    { id: 2, icon: <KakaoIcon />, label: "카카오톡 초대장 공유", to: "#" },
    {
      id: 3,
      icon: <InstaIcon />,
      label: "전시회 인스타그램",
      to: "https://www.instagram.com/dswu_itmedia_24/",
    },
  ];

  return (
    <div className="flex gap-[21px] justify-center mt-[88px] mb-[103px]">
      {MENU.map((menu) => (
        <div key={menu.id} className="flex flex-col gap-[16px] items-center w-[100px]">
          <div className="size-[64px] px-[18px] py-[16px] rounded-[9px] bg-red-lightHover cursor-pointer">
            <a href={menu.to} target="_blank">
              {menu.icon}
            </a>
          </div>
          <p className="text-grey-normal text-xs-medium leading-[16px]">{menu.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
