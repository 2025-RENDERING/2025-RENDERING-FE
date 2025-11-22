import { useState } from "react";

import Intro from "./components/Intro";
import Divider from "./components/Divider";
import Schedule from "./components/Schedule";
import Way from "./components/Way";
import Committee from "./components/Committee";
import Menu from "./components/Menu";

import mainBG from "@/assets/main.png";
import LogoIcon from "@/assets/rendering-logo.png";
import LineIcon from "@/assets/lineIcon.svg";
import LineOrangeIcon from "@/assets/LineOrangeIcon.svg";
import Left1 from "@/assets/animation-left1-fruit.svg?react";
import Left2 from "@/assets/animation-left2-art.svg?react";
import Left3 from "@/assets/animation-left3-text.svg?react";
import Left4 from "@/assets/animation-left4.svg?react";
import Left5 from "@/assets/animation-left5-art.svg?react";
import Left6 from "@/assets/animation-left6-text.svg?react";
import Left7 from "@/assets/animation-left7-line.svg?react";
import Right1 from "@/assets/animation-right1-art.svg?react";
import Right2 from "@/assets/animation-right2-card.svg?react";
import Right3 from "@/assets/animation-right3-sound.svg?react";
import Right4 from "@/assets/animation-right4-line.svg?react";

const ExhibitionPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) setIsClicked(true);
  };

  return (
    <>
      <section
        onClick={handleClick}
        className="relative z-20 flex flex-col items-center "
      >
        <div
          className={`${
            isClicked ? "pt-[71px]" : "pt-[50px]"
          } h-[175px] transition-all duration-700 ease-out`}
        >
          <div
            className={`${
              isClicked ? "max-w-[254px]" : "max-w-[272px]"
            } w-full duration-700 ease-out`}
          >
            <img
              src={LogoIcon}
              alt="rendering"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <Left1
          className={`absolute top-[70px] left-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-20 -translate-y-20"
          }`}
        />

        <Left2
          className={`absolute top-[340px] left-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-16"
          }`}
        />

        <Left3
          className={`absolute top-[633px] left-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-full"
          }`}
        />

        <Left4
          className={`absolute top-[615px] left-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-full translate-y-40"
          }`}
        />

        <Left5
          className={`absolute top-[1002px] left-[24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-full translate-y-40"
          }`}
        />

        <Left6
          className={`absolute top-[1063px] left-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-full translate-y-40"
          }`}
        />

        <Left7
          className={`absolute top-[1239px] left-[-24px] transition-all duration-700 ease-out transform ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
        />

        <Right1
          className={`absolute top-[131px] right-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-16 -translate-y-16"
          }`}
        />

        <Right2
          className={`absolute top-[434px] right-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-28"
          }`}
        />

        <Right3
          className={`absolute top-[777px] right-[-24px] transition-all duration-700 ease-out transform ${
            isClicked
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-full"
          }`}
        />

        <Right4
          className={`absolute top-[1592px] right-[-24px] transition-all duration-700 ease-out transform ${
            isClicked ? "opacity-100" : "opacity-0 "
          }`}
        />

        <Intro />

        <Divider icon={LineIcon} />

        <Schedule />

        <Divider icon={LineOrangeIcon} />

        <Way />

        <Divider icon={LineIcon} />

        <Committee />

        <Menu />
      </section>

      <div
        className="fixed inset-0 bg-cover bg-center z-10 h-full"
        style={{ backgroundImage: `url(${mainBG})` }}
      ></div>
    </>
  );
};

export default ExhibitionPage;
