import React, { useState, useEffect } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1_back from "../../img/slide1_back.png";
import styled from "./SlideBox.module.css";

import skill_html from "../../img/html.png";
import skill_css from "../../img/css.png";
import skill_jquery from "../../img/jquery.png";
import skill_javascript from "../../img/javascript.png";
import skill_react from "../../img/react.png";

import skill_java from "../../img/java.png";
import skill_spring from "../../img/spring.png";
import skill_springboot from "../../img/springboot.png";
import skill_mysql from "../../img/mysql.png";
import skill_oracle from "../../img/oracle.png";

import skill_gitpage from "../../img/gitpage.png";
import skill_cafe24 from "../../img/cafe24.webp";

function Slide() {
  const fullText = [
    "어서오세요! 이곳은 개발자 신준호를 구경하는 공간입니다.",
    "이 사이트는 리액트와 자바로 개발되었으며,",
    "참여인원은 신준호 한명입니다.",
    "딱딱한 자기소개로 심신이 지친 면접관님들의,",
    "기분이 환기가 되었으면 하는 바람입니다.",
  ];

  const [visibleLines, setVisibleLines] = useState([]); // 보여줄 줄을 저장하는 상태
  const [isLoaded, setIsLoaded] = useState(false);
  const [arrowOn, setArrowOn] = useState(false);
  const [showContainer2, setShowContainer2] = useState(false); // AboutMe_text_container2 표시 상태

  // 페이드 인 처리를 위한 효과
  useEffect(() => {
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < fullText.length) {
        setVisibleLines((prev) => [...prev, fullText[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
        setArrowOn(true); // 마지막 줄 표시 후 화살표 표시
        setTimeout(() => {
          setShowContainer2(true); // 첫 번째 컨테이너 페이드 인 완료 후 두 번째 컨테이너 표시
        }, 1000); // 1초 후에 AboutMe_text_container2가 나타나도록 함
      }
    }, 1000); // 1초 간격으로 한 줄씩 표시
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]} // 페이지네이션, 자동재생 등의 기능을 불러옴
      spaceBetween={50} // 슬라이더 간의 간격 지정
      slidesPerView={1} // 한 슬라이더 당 보여져야하는 슬라이드 갯수
      autoplay={{
        // 자동 재생
        delay: 9500, // 지연 시간 (한 슬라이더에 머물르는 시간)
        disableOnInteraction: true, // 마우스 제어 이후 자동 재생을 막을지 말지
      }}
      speed={500} // 슬라이더 넘어가는 속도
      navigation
      pagination={{
        // 페이지네이션 활성화
        clickable: true, // 페이지네이션 버튼 클릭 가능하게 할지 말지
      }}
      style={{ height: "100%" }}
    >
      <SwiperSlide>
        <section className={styled.AboutMe_section1}>
          <div>
            <img
              className={`${styled.AboutMe_section1_back_img} ${
                isLoaded ? styled.loaded : ""
              }`}
              src={slide1_back}
              alt="Background"
            />
            <div className={styled.AboutMe_text_container}>
              {/* 한 줄씩 페이드 인 */}
              {visibleLines.map((line, index) => (
                <p key={index} className={styled.fade_in}>
                  {line}
                </p>
              ))}
            </div>
            {showContainer2 && (
              <div className={styled.AboutMe_text_container2}>
                <ul className={styled.fade_in}>
                  <li>
                    <div className={styled.AboutMe_text_container2_img}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                    <div>
                      <p>이름</p>
                      <p>신준호</p>
                    </div>
                  </li>
                  <li>
                    <div className={styled.AboutMe_text_container2_img}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                      </svg>
                    </div>

                    <div>
                      <p>생년월일</p>
                      <p>94.08.10</p>
                    </div>
                  </li>
                  <li>
                    <div className={styled.AboutMe_text_container2_img}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>

                    <div>
                      <p>위치</p>
                      <p>서울특별시 금천구</p>
                    </div>
                  </li>
                  <li>
                    <div className={styled.AboutMe_text_container2_img}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </div>

                    <div>
                      <p>연락처</p>
                      <p>010-3902-0989</p>
                    </div>
                  </li>

                  <li>
                    <div className={styled.AboutMe_text_container2_img}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>
                    </div>
                    <div>
                      <p>이메일</p>
                      <p>webjunho@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {/* {arrowOn && (
              <img
                className={styled.arrow}
                src={"path/to/arrowImg"}
                alt="Scroll Down"
              />
            )} */}
          </div>
        </section>
      </SwiperSlide>

      {/* 나머지 슬라이드 */}
      <SwiperSlide>
        <div className={styled.slide_section2}>
          <h2 className={styled.skills_title}>SKILLS</h2>
          <ul className={styled.slide_section2_contaner}>
            {/* FrontEnd Skill Section */}
            <li>
              <p>FrontEnd</p>
              <ul className={styled.slide_section2_skill_box}>
                <li>
                  <img src={skill_html} alt="HTML" />
                </li>
                <li>
                  <img src={skill_css} alt="CSS" />
                </li>
                <li>
                  <img src={skill_javascript} alt="JavaScript" />
                </li>
                <li>
                  <img src={skill_jquery} alt="JQuery" />
                </li>
                <li>
                  <img src={skill_react} alt="React" />
                </li>
              </ul>
            </li>

            {/* BackEnd Skill Section */}
            <li>
              <p>BackEnd</p>
              <ul className={styled.slide_section2_skill_box}>
                <li>
                  <img src={skill_java} alt="Java" />
                </li>
                <li>
                  <img src={skill_spring} alt="Spring" />
                </li>
                <li>
                  <img src={skill_springboot} alt="SpringBoot" />
                </li>
                <li>
                  <img src={skill_mysql} alt="MySQL" />
                </li>
                <li>
                  <img src={skill_oracle} alt="Oracle" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slide;
