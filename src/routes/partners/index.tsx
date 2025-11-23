import ScrollingLogos from "./components/ScrollingLogos";
import PartnerSection from "./components/PartnerSection";
import inclearLogo from "@/assets/partners/inclear.svg";
import jiguLogo from "@/assets/partners/jigu.svg";
import inclearProduct from "@/assets/partners/inclearProduct.svg";
import jiguProduct from "@/assets/partners/jiguProduct.svg";

const PartnersPage = () => {
  const scrollingLogos = [
    { id: "inclear", image: inclearLogo },
    { id: "jiguroun", image: jiguLogo },
    { id: "photo", text: "착한 사진관" },
  ];

  return (
    <div className="w-full">
      <ScrollingLogos logos={scrollingLogos} />

      {/* 파트너 섹션들 */}
      <div className="max-w-7xl mx-auto px-4">
        <PartnerSection
          title="inclear."
          titleImage={inclearLogo}
          description={['"여성 건강의 모든 것."', "속과 겉을 모두 케어하는", "토탈 페미닌 케어 전문브랜드 '인클리어'"]}
          images={[inclearProduct]}
          showDecoration={true}
          decorationCount={5}
        />

        <PartnerSection
          title="지구로운"
          titleImage={jiguLogo}
          description={["아이부터 어른까지 모두 안심하고 즐길 수 있는", "건강과 지구를 모두 생각하는", '유기농 간식 제품 브랜드 "지구로운"']}
          images={[jiguProduct]}
          showDecoration={true}
          decorationCount={5}
        />

        <PartnerSection title="착한 사진관" description={["덕성여자대학교 정문 앞에 위치한 가족사진전문점", '"착한사진관"']} />
      </div>
    </div>
  );
};

export default PartnersPage;
