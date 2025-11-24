import { useEffect, useState } from "react";

import Intro from "./components/Intro";
import Divider from "./components/Divider";
import Schedule from "./components/Schedule";
import Way from "./components/Way";
import Committee from "./components/Committee";
import Menu from "./components/Menu";

import mainBG from "@/assets/main.png";
import LogoIcon from "@/assets/rendering-logo.png";
import LineIcon from "@/assets/lineIcon.svg";
import LineOrangeIcon from "@/assets/lineOrangeIcon.svg";

import Left1 from "@/assets/animation-left1-fruit.svg";
import Left2 from "@/assets/animation-left2-art.svg";
import Left3 from "@/assets/animation-left3-text.svg";
import Left4 from "@/assets/animation-left4.svg";
import Left5 from "@/assets/animation-left5-art.svg";
import Left6 from "@/assets/animation-left6-text.svg";
import Left7 from "@/assets/animation-left7-line.svg";
import Right1 from "@/assets/animation-right1-art.svg";
import Right2 from "@/assets/animation-right2-card.svg";
import Right3 from "@/assets/animation-right3-sound.svg";
import Right4 from "@/assets/animation-right4-line.svg";
import Animate from "./components/Animate";

const ExhibitionPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(true);
  }, []);

  return (
    <>
      {/* 모바일 레이아웃 */}
      <section className="md:hidden relative z-20 p-[24px] flex flex-col items-center mt-[64px] overflow-x-hidden">
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

        <Animate
          Icon={Left1}
          position={{ top: "70px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-20 -translate-y-20"
        />

        <Animate
          Icon={Left2}
          position={{ top: "340px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-16"
        />

        <Animate
          Icon={Left3}
          position={{ top: "633px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full"
        />

        <Animate
          Icon={Left4}
          position={{ top: "615px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full translate-y-40"
        />

        <Animate
          Icon={Left5}
          position={{ top: "1002px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full translate-y-40"
        />

        <Animate
          Icon={Left6}
          position={{ top: "1063px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full translate-y-40"
        />

        <Animate
          Icon={Left7}
          position={{ top: "1239px", left: "-24px" }}
          isClicked={isClicked}
        />

        <Animate
          Icon={Right1}
          position={{ top: "131px", right: "-24px" }}
          isClicked={isClicked}
          exit="translate-x-16 -translate-y-16"
        />

        <Animate
          Icon={Right2}
          position={{ top: "434px", right: "-24px" }}
          isClicked={isClicked}
          exit="translate-x-28"
        />

        <Animate
          Icon={Right3}
          position={{ top: "777px", right: "-24px" }}
          isClicked={isClicked}
          exit="translate-x-full"
        />

        <Animate
          Icon={Right4}
          position={{ top: "1592px", right: "-24px" }}
          isClicked={isClicked}
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

      {/* 데스크탑 레이아웃 */}
      <section
        onClick={() => setIsClicked((prev) => !prev)}
        className="hidden md:flex md:flex-col md:items-center md:relative md:z-10 md:w-full md:min-h-[932px]"
      >
        {/* 데스크탑 배경 */}
        <div
          className="hidden md:block md:absolute md:inset-0 md:z-[1] md:bg-cover md:bg-center"
          style={{ backgroundImage: `url(${mainBG})` }}
        ></div>

        <div
          className={`${
            isClicked ? "pt-[71px]" : "pt-[50px]"
          } h-[175px] transition-all duration-700 ease-out relative z-10 flex justify-center`}
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

        <Animate
          Icon={Left1}
          position={{ top: "70px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-20 -translate-y-20"
        />

        <Animate
          Icon={Left2}
          position={{ top: "340px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-16"
        />

        <Animate
          Icon={Left3}
          position={{ top: "633px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full"
        />

        <Animate
          Icon={Left4}
          position={{ top: "615px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full translate-y-40"
        />

        <Animate
          Icon={Left5}
          position={{ top: "1002px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full translate-y-40"
        />

        <Animate
          Icon={Left6}
          position={{ top: "1063px", left: "-24px" }}
          isClicked={isClicked}
          exit="-translate-x-full translate-y-40"
        />

        <Animate
          Icon={Left7}
          position={{ top: "1239px", left: "-24px" }}
          isClicked={isClicked}
        />

        <Animate
          Icon={Right1}
          position={{ top: "131px", right: "-24px" }}
          isClicked={isClicked}
          exit="translate-x-16 -translate-y-16"
        />

        <Animate
          Icon={Right2}
          position={{ top: "434px", right: "-24px" }}
          isClicked={isClicked}
          exit="translate-x-28"
        />

        <Animate
          Icon={Right3}
          position={{ top: "777px", right: "-24px" }}
          isClicked={isClicked}
          exit="translate-x-full"
        />

        <Animate
          Icon={Right4}
          position={{ top: "1592px", right: "-24px" }}
          isClicked={isClicked}
        />

        <div className="relative z-10">
          <Intro />
          <Divider icon={LineIcon} />
          <Schedule />
          <Divider icon={LineOrangeIcon} />
          <Way />
          <Divider icon={LineIcon} />
          <Committee />
          <Menu />
        </div>
      </section>

      {/* 모바일 배경 */}
      <div
        className="md:hidden fixed inset-0 bg-cover bg-center z-10 h-full w-full"
        style={{ backgroundImage: `url(${mainBG})` }}
      ></div>
    </>
  );
};

export default ExhibitionPage;
