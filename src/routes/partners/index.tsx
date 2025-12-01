import ScrollingLogos from "./components/ScrollingLogos";
import PartnerSection from "./components/PartnerSection";
import inclearLogo from "@/assets/partners/inclear.png";
import jiguLogo from "@/assets/partners/jiguLogo.png";
import monstaLogo from "@/assets/partners/monstaLogo.png";
import kindLogo from "@/assets/partners/kindLogo.png";
import rectangleImage from "@/assets/partners/Rectangle.png";
import softP from "@/assets/partners/softP.png";
import softY from "@/assets/partners/softY.png";
import monstaProduct from "@/assets/partners/monstaProduct.png";
import kindProduct from "@/assets/partners/kindProduct.png";

const PartnersPage = () => {
  const scrollingLogos = [
    { id: "inclear", image: inclearLogo },
    { id: "jiguroun", image: jiguLogo },
    { id: "monsta", image: monstaLogo },
    { id: "photo", image: kindLogo },
  ];

  return (
    <div className="w-full">
      <div className="pt-20 md:pt-0">
        <ScrollingLogos logos={scrollingLogos} />
      </div>

      {/* 파트너 섹션들 */}
      <div className="max-w-7xl mx-auto px-[24px] pb-[24px] md:pt-[24px]">
        <PartnerSection
          title="inclear."
          titleImage={inclearLogo}
          description={['"여성 건강의 모든 것."', "속과 겉을 모두 케어하는", "토탈 페미닌 케어 전문브랜드 '인클리어'"]}
          images={[rectangleImage]}
          showDecoration={true}
          decorationCount={5}
          imageWidth={247}
          imageHeight={130.46}
        />
        <PartnerSection
          title="monsta."
          titleImage={monstaLogo}
          description={["에너지를 깨우는", "글로벌 에너지 드링크 브랜드", "'몬스터 에너지'"]}
          images={[monstaProduct]}
          showDecoration={true}
          decorationCount={5}
          imageWidth={48}
          imageHeight={129.6}
        />

        <PartnerSection
          title="지구로운"
          titleImage={jiguLogo}
          description={["아이부터 어른까지 모두 안심하고 즐길 수 있는", "건강과 지구를 모두 생각하는", "유기농 간식 제품 브랜드 '지구로운'"]}
          images={[softP, softY]}
          showDecoration={true}
          decorationCount={5}
          imageWidth={122}
          imageHeight={122}
        />

        <PartnerSection
          title="착한 사진관"
          titleImage={kindLogo}
          titleImageWidth={62}
          titleImageHeight={18}
          description={["덕성여자대학교 정문 앞에 위치한 가족사진전문점", "'착한사진관'"]}
          images={[kindProduct]}
          imageWidth={163}
          imageHeight={136}
        />
      </div>
    </div>
  );
};

export default PartnersPage;
