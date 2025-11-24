import Thumb1 from "@/assets/works/1.png";
import Thumb2 from "@/assets/works/2.png";
import Thumb3 from "@/assets/works/3.png";
import Thumb4 from "@/assets/works/4.png";
import Thumb5 from "@/assets/works/5.png";
import Thumb6 from "@/assets/works/6.png";
import Thumb7 from "@/assets/works/7.png";
import Thumb8 from "@/assets/works/8.png";
import Thumb9 from "@/assets/works/9.png";
import Thumb10 from "@/assets/works/10.png";
import Thumb11 from "@/assets/works/11.png";
import Thumb12 from "@/assets/works/12.png";
import Thumb13 from "@/assets/works/13.png";
import Thumb14 from "@/assets/works/14.png";
import Thumb15 from "@/assets/works/15.png";
import Thumb16 from "@/assets/works/16.png";
import Thumb17 from "@/assets/works/17.png";
import Thumb18 from "@/assets/works/18.png";
import Thumb19 from "@/assets/works/19.png";
import Thumb20 from "@/assets/works/20.png";
import Thumb21 from "@/assets/works/21.png";
import Thumb22 from "@/assets/works/22.png";
import Thumb23 from "@/assets/works/23.png";

export interface ProjectItem {
  id: number;
  thumbnailImageUrl: string;
  teamName: string;
  title: string;
  oneLineDescription: string;
  tags: [string, string, string];
  members: string[];
  projectDescription: string;
  projectIntent: string;
}

export const PROJECT_LIST: ProjectItem[] = [
  {
    id: 1,
    thumbnailImageUrl: Thumb1,
    teamName: "2-210",
    title: "그날의 진주",
    oneLineDescription: "AI 가이드와 함께하는 몰입형 VR 역사 탐험",
    tags: ["역사교육", "VR 탐험", "생성형  AI"],
    members: ["김하나", "장재희"],
    projectDescription:
      "<그날의 진주>는 단순 관람형 VR을 넘어, 실존 인물 기반 AI 가이드와 대화하며 역사를 직접 탐험하는 몰입형 VR 콘텐츠이다. 철저한 고증을 바탕으로 재현된 1593년 제2차 진주성 전투 속 항쟁의 현장에서 사용자의 능동적인 체험을 유도하여 자연스러운 학습의 효과를 준다.",
    projectIntent:
      "기존 역사 교육 및 전시 콘텐츠의 암기 중심•단방향 정보 전달의 한계를 극복하고자 하였다. 사용자가 가상공간을 자율적으로 탐색하며 AI 가이드와의 상호작용을 통해 능동적으로 학습하는 경험을 제공하고, 다양한 산업 분야로의 확장 가능성을 모색한다.",
  },
  {
    id: 2,
    thumbnailImageUrl: Thumb2,
    teamName: "3v3r",
    title: "화록",
    oneLineDescription: "디지털 창작자 히스토리 기록 소프트웨어",
    tags: ["창의성", "프롬프트", "히스토리"],
    members: ["강민지", "방예원", "이다희", "최원영"],
    projectDescription:
      "AI가 만들어 내는 수많은 이미지 속, 인간의 흔적은 어디에 있을까? ‘화록’은 생성형 AI의 창작 과정에서 인간의 창의적 개입을 추적한다. 프롬프트 한 줄에 담긴 생각과 시도를 따라가며, DPDT(이중경로발산적사고) 이론을 바탕으로 인간의 창의성을 탐구한다.",
    projectIntent:
      "생성형 AI의 확산으로, AI가 만든 콘텐츠의 저작권 문제가 전 세계적 이슈로 떠오르고 있다. 창작 과정에서 인간의 기여도를 증명하기 위해 AI와 인간이 협업하는 창작 환경 속에서 인간의 존재와 기여를 드러낼 수 있는 창작 지원 소프트웨어를 기획하였다.",
  },
  {
    id: 3,
    thumbnailImageUrl: Thumb3,
    teamName: "공일삼잇뽀",
    title: "Clean Up",
    oneLineDescription: "은둔·고립형 청년을 위한 게임형 청소 퀘스트 앱 ",
    tags: ["AI 인식", "방청소", "보상게임"],
    members: ["김민주", "김유정", "이서은", "차서현"],
    projectDescription:
      "은둔·고립형 청년의 생활습관 개선을 돕기 위해 청소 과정에 게임 요소를 접목한 모바일 애플리케이션이다. 정리가 필요한 공간을 촬영하면 자동으로 퀘스트가 생성되며, 완료 시 캐릭터 등의 보상을 제공해 성취감을 높이고 지속적인 참여를 유도한다.",
    projectIntent:
      "사회·심리적 요인으로 고립된 청년이 급증하며 사회적 문제로 떠오르고 있다. 이에 따라 청소에 어려움을 겪고 게임 이용률이 높은 특성을 반영해, AI 객체 인식 기술과 게임 요소를 결합한 청소 퀘스트 게임을 기획했다. 이 서비스는 사용자의 자기효능감을 높이고 사회 복귀를 돕는 것을 목표로 한다.",
  },
  {
    id: 4,
    thumbnailImageUrl: Thumb4,
    teamName: "기상청사람들",
    title: "Weather to Wear",
    oneLineDescription: "오늘의 날씨, 나만의 코디",
    tags: ["AI 코디", "기온데이터", "맞춤추천"],
    members: ["김가현", "김수린", "경다현", "장예린"],
    projectDescription:
      "실시간 날씨 데이터와 AI 대화형 기능을 활용한 패션 추천 웹이다. 사용자가 가진 옷이나 선호 스타일을 입력하면, 날씨에 맞춘 맞춤형 코디를 제안한다.",
    projectIntent:
      "기후 변화로 불규칙한 날씨가 일상이 되며, 옷차림 선택의 어려움이 커졌다. 이에 실시간 날씨 데이터와 AI 대화 기능을 결합해, 개인 맞춤형 코디를 손쉽게 추천받을 수 있는 웹을 기획했다.",
  },
  {
    id: 5,
    thumbnailImageUrl: Thumb5,
    teamName: "김이박",
    title: "MoodPix",
    oneLineDescription: "실시간 감정분석을 활용한 VTuber인터랙션 시스템",
    tags: ["감정인식", "가상캐릭터", "실시간 제어"],
    members: ["김규민", "박수민", "이예빈"],
    projectDescription:
      "MoodPix는 실시간 얼굴·음성 감정 인식 AI를 통해 가상 캐릭터의 표정과 모션을 자동으로 반영하는 인터랙션 시스템이다. 자연스러운 감정 표현으로 몰입감 있는 방송 환경을 제공한다.",
    projectIntent:
      "VTuber방송은 감정 표현이 수동 제어에 의존해 몰입감이 떨어진다. MoodPix는 실시간 감정 인식 AI를 통해 자연스럽고 몰입감 있는 캐릭터 인터랙션을 구현하고자 한다.",
  },
  {
    id: 6,
    thumbnailImageUrl: Thumb6,
    teamName: "덕학다식",
    title: "리부트",
    oneLineDescription: "AI 동작감지 모니터링 시스템 기반 생활 습관 개선 서비스",
    tags: ["AI", "동작인식", "루틴관리"],
    members: ["김주은", "이해원", "박지윤", "추예지"],
    projectDescription:
      "이 서비스는 은둔·고립 청년의 생활 루틴 회복을 돕는 모바일 앱이다. 미션을 통해 행동 변화를 유도하고, 생활 패턴 리포트를 제공한다. AI 기반 동작 감지 기술로 사용자 행동을 실시간 분석해 미션 달성 여부를 기록하며, 개인화된 회복 경험을 지원한다.",
    projectIntent:
      "2023년 기준, 19~34세 은둔·고립 청년은 약 53만 명으로 추정된다. 이들은 불규칙한 생활과 무력감으로 인해 우울증과 만성질환 등 건강 위험에 노출되어 있다. 전문가의 개입 없이도 스스로 생활을 점검하고 성취감을 얻을 수 있는 서비스를 기획했다.",
  },
  {
    id: 7,
    thumbnailImageUrl: Thumb7,
    teamName: "뚜벅뚜벅",
    title: "MotionSync VR",
    oneLineDescription: "움직임으로 이동하는 몰입형 체험",
    tags: ["딥러닝", "NUI", "VR 체험"],
    members: ["김다영", "구서현", "김슬기", "최아인"],
    projectDescription:
      "VR HMD 센서로 걷기, 뛰기, 점프, 대기 동작을, 딥러닝을 통하여 실시간 인식해 컨트롤러 없이도 헤드셋만으로 VR 공간을 자연스럽고 직관적으로 이동할 수 있는 시스템이다.",
    projectIntent:
      "기존 VR 시스템은 컨트롤러나 트레드밀 등 외부 장비에 의존하여 몰입감이 제한되는 한계를 가진다. 이에 따라 별도의 장비 없이 VR 기기 자체 센서만을 활용해 사용자의 동작을 직관적으로 인식할 수 있는 기술 개발이 필요하다.",
  },
  {
    id: 8,
    thumbnailImageUrl: Thumb8,
    teamName: "루이즈",
    title: "Us-Reborn",
    oneLineDescription: "디지털 트윈 기반 VR 환경 복구 게임",
    tags: ["VR 체험", "AI 분석", "환경 복구"],
    members: ["권도희", "이연수", "이진경", "안희진"],
    projectDescription:
      "사용자가 우주 환경 미화원이 되어 오염된 행성을 정화하고 생태계를 복원하는 VR 환경 복구 체험형 게임이다. AI 객체 인식, 핸드 트래킹, 디지털 트윈 기술을 활용해 쓰레기를 분류하고 동물을 돕는 과정을 통해 환경 회복의 의미를 체험할 수 있다.",
    projectIntent:
      "환경 문제의 인식을 넘어 내 공간에서 직접 실천하는 경험으로 확장하고자 기획했다. 현실 공간을 재현한 디지털 트윈 환경에서 쓰레기를 줍고 분류하며, 별도의 미니게임을 통해 환경오염으로 위기에 처한 동물을 구출합니다. 이를 통해 환경 보호의 의미를 되새길 수 있다.",
  },
  {
    id: 9,
    thumbnailImageUrl: Thumb9,
    teamName: "먹GO!",
    title: "Bapick!",
    oneLineDescription: "AI 채팅 기반 운세 맛집 추천 플랫폼",
    tags: ["AI 챗봇", "맛집 추천", "오늘의 운세"],
    members: ["권현진", "김재희", "마디나보누", "방예진", "유서현"],
    projectDescription: `매일 반복되는 "오늘 뭐 먹지?"라는 고민을 AI 챗봇과의 즐거운 채팅으로 해결해주는 플랫폼이다. Bapick!은 사용자와의 대화를 통해 나만의 식성과 오늘의 운세를 분석하고 행운의 메뉴와 맛집을 제공하여 특별한 하루를 선물한다.`,
    projectIntent: `다양해진 현대인의 식문화 속‘AI 챗봇’이라는 대화형 인터페이스를 통해 딱딱한 정보 검색 과정을 '친구와 대화하는 듯한' 즐거운 경험으로 전환하는 것을 목표로 한다. 사용자의 식성과 같은 명시적 정보와 운세같은 감성적 정보를 종합적으로 분석하여, 맞춤형 맛집 추천 서비스를 제공한다.`,
  },
  {
    id: 10,
    thumbnailImageUrl: Thumb10,
    teamName: "뮤즈",
    title: "냠냠한상",
    oneLineDescription: "핸드트래킹 기반 VR 음식 조리 시뮬레이션 게임 ",
    tags: ["VR 게임", "전통요리", "한식체험"],
    members: ["김은진", "김지혜", "장수연", "정한비"],
    projectDescription: `사용자가 게임에서 제공되는 조리법을 따라 직접 한식을 조리하는 VR 시뮬레이션. 비교적 간단한 재료와 조리법을 사용하는 한식요리를 조사 및 선정하여 요리에 익숙하지 않은 사람이라도 쉽게 조리법을 따라 할 수 있도록 설계한 게임이다.`,
    projectIntent: `주로 구술, 종이문서로 전승되어와 정확한 정보가 누락되기 쉬운 한식 조리법을 데이터로써 보존하고자 했다. 나아가 한국 문화 콘텐츠를 VR, 특히 핸드트래킹이라는 색다른 방식으로 체험하여 인지도를 높이고자 한다.`,
  },
  {
    id: 11,
    thumbnailImageUrl: Thumb11,
    teamName: "블렌더",
    title: "몽글(mongle)",
    oneLineDescription: "AI 기반 HTP 검사 및 심리분석 서비스",
    tags: ["AI-HTP", "아동심리분석", "맞춤질문생성"],
    members: ["김민주", "김채이", "안수진", "이미연"],
    projectDescription: `‘몽글(mongle)’은 AI가 아동의 HTP(House-Tree-Person) 그림을 분석해 심리적 특성을 도출하는 확장형 검사(A-HTP)이다. 인공지능이 그림의 구조·형태·색채를 정량화해 내면의 감정과 성향을 시각적으로 탐색하는 차세대 심리 진단 서비스이다.`,
    projectIntent: `기존 HTP검사에 AI를 접목하여 심리 지원의 지역·환경적 한계를 보완하고 아동의 정서 접근성을 높이기 위한 디지털 심리검사이다. AI 기반 분석으로 그림에 대한 객관적 피드백을 제공하며, 아동의 무의식적 정서 신호를 신속하게 탐지하도록 설계했다.`,
  },
  {
    id: 12,
    thumbnailImageUrl: Thumb12,
    teamName: "예측불가",
    title: "YeS-CAN",
    oneLineDescription: "AI 기반 실시간 뉴스 기사 분석 프로그램",
    tags: ["분석", "가짜뉴스", "플러그인"],
    members: ["조예현", "하예린"],
    projectDescription: `딥러닝 모델을 활용하여 뉴스 기사의 낚시성, 자극성, 광고성을 분석하고 사용자에게 즉각적인 결과를 제공하는 Chrome 확장 프로그램이다. 분석 결과는 간단 요약과 상세 분석 형태로 제공한다.`,
    projectIntent: `최근 가짜 뉴스 및 유해 정보 확산 문제가 심각해지며 뉴스 콘텐츠의 신뢰성 판별 필요성이 대두되고 있다. 이에 가짜 뉴스 및 유해 정보로부터 사용자를 보호하고 미디어 리터러시를 향상시키기 위해 한국어 기사에 특화된 분석 프로그램을 개발하게 되었다.`,
  },
  {
    id: 13,
    thumbnailImageUrl: Thumb13,
    teamName: "정주나요",
    title: "Dorememe",
    oneLineDescription: "VR 기반 다중 감각 미디어 아트",
    tags: ["VR 체험", "음악감상", "Sketch2Music"],
    members: ["박서정", "서정윤", "안소정", "정다현"],
    projectDescription: `사용자가 VR 공간에서 그림을 그리면 채색에 쓰인 색상 및 브러시 굵기 , 지우개 사용 횟수 등이 음악 생성 파라미터로 전달된다. 단일 멜로디를 생성하도록 학습시킨 모델을 거친 뒤, 반주를 더한 음악이 만들어진다. 그림과 음악을 함께 감상하는 다중 감각 체험형 콘텐츠를 제공한다.`,
    projectIntent: `비대면 실감형 콘텐츠의 활용이 보편화되며, VR•AR 기반의 학습 및 치료 도구에 대한 수요가 급증하고 있다. 기존의 대다수가 시각적 경험에 치중되어 있는 반면, 시청각을 융합한 본 작품은 사용자가 직접 참여하여 자신만의 공감각적 공간을 창조해 나간다는 점에서 의의를 지닌다.`,
  },
  {
    id: 14,
    thumbnailImageUrl: Thumb14,
    teamName: "토깽이",
    title: "Emotion Catcher",
    oneLineDescription: "마음챙김 몰입형 인터랙티브 대화 서비스",
    tags: ["VR 채팅", "마음챙김", "인터랙티브"],
    members: ["김다빈", "김혜리", "박주은"],
    projectDescription: `실시간 사용자 감정 인식 및 VR 기술을 결합한 몰입형 인터랙티브 대화 서비스이다. 경력 단절 여성의 정서적 부담 완화를 위해 개발되었으며, 사용자는 캐릭터 ‘마루’(LLaMA 기반 챗봇)와 대화하며 공감과 위로를 얻는다. 대화 및 감정 변화는 웹페이지로도 제공된다.`,
    projectIntent: `경력 단절 여성의 심리적 문제 해결에 주목해 정서적 안정감 제공이 가능한 실시간 감정 인식을 통해 공감하는 프로그램이 필요하다고 판단했다. 편안하게 이용 가능한 대화 공간을 구현하여, 사용자의 접근성을 높이고 정서적 건강을 관리할 수 있는 프로그램을 기획하게 되었다.`,
  },
  {
    id: 15,
    thumbnailImageUrl: Thumb15,
    teamName: "프롬하츠",
    title: "Uheeverse",
    oneLineDescription: "지역 축제 활성화를 위한 온라인 인터랙티브 콘텐츠",
    tags: ["지역 축제", "인터랙티브", "공간체험"],
    members: ["김연우", "박세민", "서혜랑", "오주현"],
    projectDescription: `지역 홍보 활성화를 위해 다양한 지역 축제를 배경으로 한 온라인 인터랙션 콘텐츠이다. 지역 축제에 관한 퀴즈 및 축제 및 지역에 관해 질문할 수 있는 다양한 NPC 제공을 통해 지역 축제에 대한 관심을 높이고 상점 및 미니게임을 통해 사용자에게 게임의 즐거움을 선사한다.`,
    projectIntent: `수도권 집중화로 지역 관광 수요 감소가 지역 경제 활성화에 어려움을 초래하고 있다. 본 프로젝트는 지역 축제를 디지털 콘텐츠로 구현하고 퀴즈·미니게임·NPC 상호작용 등 게임적 요소를 결합해 누구나 쉽고 재미있게 체험할 수 있는 환경을 조성하고자 한다.`,
  },
  {
    id: 16,
    thumbnailImageUrl: Thumb16,
    teamName: "한송이조",
    title: "노고록",
    oneLineDescription: "스트레스 기반 AI 맞춤 관리 서비스",
    tags: ["스트레스", "일정추천", "마음챙김"],
    members: ["송채은", "이효린", "조수민", "한지원"],
    projectDescription: `갤럭시 워치로 수집한 생체 데이터를 바탕으로 사용자의 스트레스 상태를 파악하고, 일정 속 여유 시간을 찾아 자연스러운 휴식을 제안한다. 짧은 활동부터 문화·전시 기반의 깊은 휴식까지, 개인의 컨디션 맞춤형 루틴을 만들어가며 일상 속 자기돌봄을 돕는다.`,
    projectIntent: `빠르게 변화하는 일상 속에서 청년층은 과중한 일정과 압박 속에 자신을 돌볼 여유를 잃고 있다. 노고록은 이러한 삶 속에서 마음 상태를 인식하고 스스로 회복할 수 있는 시간을 만들어가는 AI 기반 디지털 웰빙 서비스로, 자연스러운 휴식을 갖는 것을 목표로 한다.`,
  },
  {
    id: 17,
    thumbnailImageUrl: Thumb17,
    teamName: "Chill Girls",
    title: "I See You",
    oneLineDescription: "AR 기반 실내 공간 동선 측정 시스템",
    tags: ["AR 스캔", "동선 추적", "아바타 재현"],
    members: ["김정서", "성주현", "이가영", "표하은"],
    projectDescription: `ARCore와 PoseNet 기반 AI 기술을 활용해 실내 공간의 구조와 인체 동선을 수집·분석한다. 정밀한 좌표 데이터를 바탕으로 디지털 제작 환경의 자동화와 시각화를 구현한다.`,
    projectIntent: `복잡한 제작 현장의 동선 관리, 이제는 손이 아닌 데이터로 해결한다. AR과 AI를 결합해 공간을 3D로 스캔하고 움직임을 실시간으로 분석·시각화하여, 프리비즈 단계의 정밀도와 효율성을 높인다.`,
  },
  {
    id: 18,
    thumbnailImageUrl: Thumb18,
    teamName: "DS버스터즈",
    title: "젤리 버스터즈 : 지구를 지켜라",
    oneLineDescription: "실시간 날씨 API와 챗봇을 활용한 환경보호 슈팅게임",
    tags: ["실시간 날씨 API", "AI 챗봇", "환경보호 슈팅게임"],
    members: ["김다은", "고지원", "나예원"],
    projectDescription: `‘젤리 버스터즈: 지구를 지켜라’는 언리얼 엔진으로 제작된 1인칭 전환 슈팅게임이다. 지구온난화로 탄생한 오염 젤리를 퇴치하며, 사용자는 게임을 통해 환경보호의 필요성을 체험적으로 배운다.`,
    projectIntent: `환경오염에 대한 경각심을 높이고 환경보호의 중요성을 자연스럽게 인식하도록 설계했다. 실시간 날씨 데이터로 실제와 유사한 월드를 구현해 몰입감을 높였으며, GPT 기반 챗봇 ‘에코’가 환경보호 조언을 제공한다.`,
  },
  {
    id: 19,
    thumbnailImageUrl: Thumb19,
    teamName: "FOCUZ:M",
    title: "FOCUZ:M",
    oneLineDescription: "AI기반 몰입형 VR 전시",
    tags: ["VR 전시", "인터랙티브", "생성형 AI"],
    members: ["고예윤", "신유정", "유채은", "이경민"],
    projectDescription: `앙리 마티스의 작품 세계를 VR 공간에서 새롭게 경험하는 확장형 디지털 전시이다. 관람객의 선택과 행동 데이터를 AI 모델과 결합하여 개인화된 몰입형 예술 경험을 선사한다.`,
    projectIntent: `기존 전시는 관람자가 작품을 일방적으로 감상하는 수동적 체험에 그쳤다. 우리는 VR과AI를 활용해 관람자의 선택과 행동이 곧 작품의 일부가 되는 전시를 기획함으로써, 개인화된 몰입 경험을 제공하고 예술 감상의 방식을 확장하고자 한다.`,
  },
  {
    id: 20,
    thumbnailImageUrl: Thumb20,
    teamName: "MJMC",
    title: "Lost Something",
    oneLineDescription: "장애 인식 개선 2인 협동 게임",
    tags: ["협력", "스릴", "탈출"],
    members: ["나윤주", "남서하", "이슬", "이주영"],
    projectDescription: `VR로도 체험이 가능한 장애인 인권 감수성 향상을 위한 게임기반 PC 교육용 콘텐츠로, 게임 내에서 서로 다른 제한된 감각과 능력을 가진 캐릭터들을 통해 장애인의 일상적 어려움을 경험한다.`,
    projectIntent: `기존의 장애 인식 개선 교육은 실효성이 부족하다는 문제가 제기되고 있고, 교육 방식에서 역시 여러 한계가 나타나고 있다. 이러한 문제를 게이미피케이션을 통해 해결하고자 한다.`,
  },
  {
    id: 21,
    thumbnailImageUrl: Thumb21,
    teamName: "Moodie",
    title: "MoodStudio",
    oneLineDescription: "3D 시각화를 통해 감각적인 취미 브랜딩을 돕는 서비스",
    tags: ["감성", "기록", "취미"],
    members: ["강승현", "이가현", "이서진", "추민서"],
    projectDescription:
      "MoodStudio는 책, 영화, 음악 등 다양한 작품을 3D 캐비넷 형태로 기록해 시각적으로 감각적인 취미 브랜딩을 돕는 앱이다. 사용자는 템플릿을 활용해 자신만의 스타일로 콘텐츠를 자유롭게 정리할 수 있다.",
    projectIntent:
      "디지털과 아날로그의 조화를 통해 감정을 시각적으로 기록할 수 있는 새로운 취미 기록 방식을 제안한다. 단순한 리스트형 기록을 넘어, 3D 인터페이스를 통해 개성과 감성을 담은 취향 표현 공간을 제공한다.",
  },
  {
    id: 22,
    thumbnailImageUrl: Thumb22,
    teamName: "ORITU",
    title: "Dual Infection",
    oneLineDescription: "좀비 바이러스 변이 생존자의 하드코어 FPS",
    tags: ["FPS", "좀비", "하드코어"],
    members: ["권가영"],
    projectDescription: `미완성 백신의 부작용으로 좀비와 인간 사이를 오가게 된 특수부대 요원 CBD, 혼란과 위험이 가득한 산림에서 살아남아 탈출하기 위해 파밍과 교전을 이어가는 1인칭 하드코어 생존 FPS 게임이다. `,
    projectIntent: `생존과 정체성의 경계를 넘나드는 설정을 통해, 긴장감 속에서 끊임없이 선택하고 몰입하게 되는 게임 경험을 유저에게 제공하고자 <Dual Infection>을 기획했다.`,
  },
  {
    id: 23,
    thumbnailImageUrl: Thumb23,
    teamName: "wave to 덕",
    title: "Digital Panopticon",
    oneLineDescription: "AI, 자연어 처리 기반 인터랙티브 미디어아트",
    tags: ["미디어아트", "참여형 전시", "AI 윤리"],
    members: ["백민서", "성은희", "이다윤", "전윤하"],
    projectDescription: `본 전시는 AI 시대의 데이터 수집과 감시 구조를 시각화한 몰입형 인터랙티브 작품이다. 관람객은 자신의 일상적 흔적이 어떻게 수집·재구성되어 다시 자신에게 영향을 미치는지 직관적으로 체험하며, 3면으로 구성된 공간에서 각자에게 맞춤형 경험을 제공받는다.`,
    projectIntent: `현대인은 일상 속에서 무의식적으로 데이터를 제공하지만, 그 정보가 어떻게 수집되고 AI 학습에 사용되는지는 인식하지 못한다. 이 과정을 시각적으로 체험하게 함으로써, AI가 개인의 선택과 시야를 어떻게 제한하는지 느끼게 한다.`,
  },
];
