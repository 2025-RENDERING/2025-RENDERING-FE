import HomeIcon from "@/assets/homeIcon.svg?react";
import KakaoIcon from "@/assets/kakoIcon.svg?react";
import InstaIcon from "@/assets/instaIcon.svg?react";
import { useEffect } from "react";

const Menu = () => {
  const MENU = [
    {
      id: 1,
      icon: <HomeIcon className="shrink-0" />,
      label: "학과 홈페이지",
      to: "https://www.duksung.ac.kr/itmedia/main.do",
    },
    { id: 2, icon: <KakaoIcon className="shrink-0" />, label: "카카오톡 초대장 공유" },
    {
      id: 3,
      icon: <InstaIcon className="shrink-0" />,
      label: "전시회 인스타그램",
      to: "https://www.instagram.com/dswu_itmedia_25/",
    },
  ];

  const url = window.location.origin;

  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.9/kakao.min.js";
    kakaoScript.integrity = import.meta.env.VITE_KAKAO_INTEGRITY_VALUE;
    kakaoScript.crossOrigin = "anonymous";

    kakaoScript.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
      }
    };

    document.head.appendChild(kakaoScript);
  }, []);

  const handleShareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Welcome to RENDERING",
        description:
          "2025 덕성여자대학교 IT미디어공학전공 제13회 졸업전시회: RENDERING\n12월 17일(수) - 12월 19일(금)",
        imageUrl: `${window.location.origin}/poster.png`,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: "Exhibition Website",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <div className="flex gap-[21px] justify-center mt-[88px] mb-[103px]">
      {MENU.map((menu) => (
        <div
          key={menu.id}
          className="flex flex-col gap-[16px] items-center w-[100px] cursor-pointer"
        >
          <div
            onClick={menu.id === 2 ? handleShareKakao : undefined}
            className="size-[64px] px-[18px] py-[16px] rounded-[9px] bg-red-lightHover cursor-pointer flex justify-center items-center"
          >
            {menu.id === 2 && menu.icon}
            {menu.id !== 2 && (
              <a href={menu.to} target="_blank">
                {menu.icon}
              </a>
            )}
          </div>
          <p className="text-grey-normal text-xs-medium leading-[16px] max-[395px]:text-[11px] max-[364px]:text-[10px] text-center">
            {menu.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
