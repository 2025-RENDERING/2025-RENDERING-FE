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

const ExhibitionPage = () => {
  return (
    <>
      <section className="relative z-20">
        <div>
          <img src={LogoIcon} alt="rendering" />
        </div>

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
