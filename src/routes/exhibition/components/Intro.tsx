const Intro = () => {
  return (
    <section className="text-center flex flex-col gap-[40px]">
      <h1 className="text-blue-lightHover text-[16px] text-m-bold">
        상상이 현실이 되는 순간, RENDERING
      </h1>

      <div className="text-grey-normal text-x-medium max-[395px]:text-[13px] leading-[19.6px]">
        <p>
          덕성여자대학교 IT미디어공학전공은
          <br />
          융합적 사고와 창의적 기술력을 바탕으로
          <br />
          미래를 선도할 인재를 양성하고 있습니다.
          <br />
          다채로운 IT 분야를 아우르는 교육 과정을 통해
          <br />
          학생들이 쌓아온 지식과 경험은
          <br />
          이번 졸업전시회에서 구체적인 형상으로 구현됩니다.
          <br />
          이 모든 배움의 조각들이 층층이 쌓여
          <br />
          마침내
          <span className="text-s-bold max-[395px]:text-[13px] text-red-normal">
            {" "}
            RENDERING 99%
          </span>
          에 도달했습니다.
        </p>

        <br />

        <p>
          게임, 미디어아트, 웹·앱 등 각기 다른 프로그램과 언어를
          <br />
          기반으로 완성된 작품들은 마지막 렌더링을 거쳐
          <br />
          하나의 완결된 형태로 관람객과 만나게 됩니다.
          <br /> 이는 곧 지난 4년간의 탐구와 도전,
          <br />
          그리고 창조적 여정이 집약된 결과이자
          <br />
          <span className="text-s-bold text-red-normal">상상이 현실이 되는 순간</span> 그
          자체입니다.
        </p>

        <p>
          마지막 1%의 완성은 이 자리에 함께하시는 여러분의
          <br />
          관심과 경험으로 채워지길 기다립니다.
        </p>

        <br />

        <p>상상이 현실이 되는 눈부신 순간에 여러분을 초대합니다.</p>
      </div>
    </section>
  );
};

export default Intro;
