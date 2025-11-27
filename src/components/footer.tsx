import duksugLogo from "../assets/duksungLogo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start px-8 py-6 bg-grey-darkHover text-white relative z-20">
      <div className="text-xs-bold mb-2">
        2025 덕성여자대학교 IT미디어공학전공 <br className="hidden max-[391px]:block " /> 제13회 졸업전시회 웹사이트
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-xs-medium">Design 서혜랑 이연수</p>
        <p className="text-xs-medium">Front-end 강승현 김진효 노진경 정서영 최윤영</p>
        <p className="text-xs-medium">Back-end 고희주 이가은</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-xs-medium mt-2">© 2025. IT Media Engineering all rights reserved.</div>
        <img src={duksugLogo} alt="duksuLogo" className="w-[76px] h-[17.233px;]" />
      </div>
    </footer>
  );
};

export default Footer;
