import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Swiper 모듈 추가
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// 이미지 파일을 상단에서 import
import section1BackImg from "../img/section1_back.webp";
import section1FrontImg from "../img/section1_front.png";
import arrowImg from "../img/arrow.png";

// Swiper 모듈 등록
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slide() {
  const [introText, setIntroText] = useState("");
  const textIndex = useRef(0); // useRef로 인덱스 유지
  const timer = useRef(null); // 타이머를 관리할 ref
  const [isLoaded, setIsLoaded] = useState(false);
  const [arrowOn, setArrowOn] = useState(false); // 화살표 표시 상태

  const fullText =
    " 어서오세요! 이곳은 개발자 신준호를 구경하는 공간입니다. 이 사이트는 리액트와 자바로 개발되었으며, 참여인원은 신준호 한명입니다. 딱딱한 자기소개로 심신이 지친 면접관님들의, 기분이 환기가 되었으면 하는 바람입니다.";

  useEffect(() => {
    const typeText = () => {
      if (textIndex.current < fullText.length) {
        setIntroText((prev) => prev + fullText.charAt(textIndex.current));
        textIndex.current++;
        timer.current = setTimeout(typeText, 70);
      } else {
        // 마지막 글자가 출력되면 타이머를 클리어
        clearTimeout(timer.current);
        setArrowOn(true);
      }
    };

    if (textIndex.current === 0) {
      // 첫 번째 타이핑 애니메이션 시작
      setTimeout(typeText, 70);
    }

    return () => {
      // 컴포넌트 언마운트 시 타이머 클리어
      clearTimeout(timer.current);
    };
  }, [fullText]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const formattedText = introText.replace(/[.,!]/g, "$&<br />");

  return (
    <Swiper
      spaceBetween={50} // 슬라이드 간격
      slidesPerView={1} // 한 번에 보여줄 슬라이드 수
      navigation // 화살표 내비게이션 활성화
      pagination={{ clickable: true }} // 페이지네이션(점) 활성화 및 클릭 가능 설정
      scrollbar={{ draggable: true }} // 스크롤바 활성화 및 드래그 가능
      loop={true} // 무한 루프
    >
      {/* 첫 번째 슬라이드: 기존 section1 내용 */}
      <SwiperSlide>
        <section style={{ height: "90vh", backgroundColor: "#000" }}>
          <div>
            <img
              style={{ opacity: isLoaded ? 1 : 0 }}
              src={section1BackImg}
              alt="Background"
            />
            <img src={section1FrontImg} alt="Welcome" />
            <h2>
              <span dangerouslySetInnerHTML={{ __html: formattedText }} />
            </h2>
            {arrowOn && (
              <img
                src={arrowImg}
                alt="Scroll Down"
                style={{ position: "absolute", bottom: "20px", left: "50%" }}
              />
            )}
          </div>
        </section>
      </SwiperSlide>

      {/* 나머지 슬라이드 */}
      <SwiperSlide>
        <div style={{ backgroundColor: "#0f0", height: "300px" }}>
          슬라이드 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "#00f", height: "300px" }}>
          슬라이드 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "#ff0", height: "300px" }}>
          슬라이드 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slide;
