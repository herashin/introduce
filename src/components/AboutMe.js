import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "./AboutMe.module.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import SkillChart from "./SkillChart";

function AboutMe() {
  // alert("어서오세요.  이곳은 개발자 신준호를 구경하는 공간입니다.");

  const [introText, setIntroText] = useState("");
  const textIndex = useRef(0); // useRef로 인덱스 유지
  const timer = useRef(null); // 타이머를 관리할 ref
  const [isLoaded, setIsLoaded] = useState(false);
  const [arrowOn, setArrowOn] = useState(false); // 화살표 표시 상태
  const [chartsVisible, setChartsVisible] = useState(false); // 그래프가 보이는지 여부

  const fullText =
    " 어서오세요! 이곳은 개발자 신준호를 구경하는 공간입니다. 이 사이트는 리액트와 자바로 개발되었으며, 참여인원은 신준호 한명입니다. 딱딱한 자기소개로 심신이 지친 면접관님들의, 기분이 환기가 되었으면 하는 바람입니다.";
  // 면접관님들의,  쉼표는  미적허용
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

  // 마침표(.)마다 <br /> 태그 추가
  const formattedText = introText.replace(/[.,!]/g, "$&<br />");

  // section3 으로 스크롤을 내리면 그래프가 작동하게 함
  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setChartsVisible(true); // 그래프 표시 상태 업데이트
          observer.disconnect(); // 한 번만 동작하도록 옵저버 해제
        }
      },
      { threshold: 0.5 } // 50% 이상 화면에 보이면 트리거
    );

    const section3 = document.querySelector(`.${styled.AboutMe_section3}`);
    if (section3) {
      observer.observe(section3);
    }

    return () => {
      if (section3) {
        observer.unobserve(section3);
      }
    };
  }, []);

  return (
    <div className={styled.AboutMe_wrap}>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{ height: "90vh", backgroundColor: "#000" }}>
            <div className={styled.AboutMe_q_mark}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <circle cx="50" cy="50" r="25" fill="lightgray" />

                <text
                  x="37"
                  y="66"
                  font-size="45"
                  font-family="Arial"
                  fill="#fff"
                >
                  ?
                </text>
              </svg>
              <p className={styled.AboutMe_q_text}>
                <span>* 이 이력서는 현재 개발 진행중입니다.</span>
                <br />
                이 페이지(index)에 들어간 기술
                <br />
                Fullpage
                <br />
                setTimeout
                <br />
                Chart.register
                <br />
                Media Query (모바일 지원)
                <br />
                IntersectionObserver
                <br /> JAVA (예정)
                <br />
              </p>
            </div>
            <section className={styled.AboutMe_section1}>
              {/* 배경 이미지 추가 */}
              <img
                className={`${styled.AboutMe_section1_back_img} ${
                  isLoaded ? styled.loaded : ""
                }`}
                src={require("../img/section1_back.webp")}
                alt="Background"
              />
              {/* 기존 이미지 */}
              <img
                className={styled.AboutMe_section1_img}
                src={require("../img/section1_front.png")}
                alt="Welcome"
              />

              <h2 className={styled.AboutMe_top_title}>
                {/* {introText} */}
                <span dangerouslySetInnerHTML={{ __html: formattedText }} />
              </h2>

              {/* 화살표 이미지 (타이핑 완료 후 표시) */}
              {arrowOn && (
                <img
                  className={styled.arrow}
                  src={require("../img/arrow.png")} // 화살표 이미지 경로
                  alt="Scroll Down"
                />
              )}
            </section>
          </FullpageSection>

          <FullpageSection
            style={{ height: "90vh", backgroundColor: "#F7F7F7" }}
          >
            <section className={styled.AboutMe_section2}>
              <h3 className={styled.section2_title}>걸어온 길</h3>
              <ul className={styled.image_list}>
                <li>
                  {/* <Link to="/job1">
                    <img src={require("../img/job1_1.jpg")} alt="현금호송원" />
                    <h4>하루에 수십억씩 만지는 직업</h4>
                  </Link> */}

                  <Link to="/BoardDetail/1">
                    <img src={require("../img/job1_1.jpg")} alt="현금호송원" />
                    <h4>하루에 수십억씩 만지는 직업</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/job2">
                    <img src={require("../img/job2_1.jpg")} alt="웹퍼블리셔" />
                    <h4>웹 퍼블리셔로의 성장</h4>
                  </Link>
                </li>
                <li>
                  <Link to="/job3">
                    <img
                      src={require("../img/job3_1.jpg")}
                      alt="자바클래스 수료"
                    />
                    <h4>새로운 도전</h4>
                  </Link>
                </li>

                <li>
                  <Link to="/job4">
                    <img
                      src={require("../img/job4_1.jpg")}
                      alt="자바클래스 수료"
                    />
                    <h4>자바 백엔드 개발자로의 성장</h4>
                  </Link>
                </li>
              </ul>
            </section>
          </FullpageSection>

          <FullpageSection
            style={{ height: "90vh", backgroundColor: "#333", color: "white" }}
          >
            <section className={styled.AboutMe_section3}>
              <h3 className={styled.section3_title}>기술 스택</h3>
              <ul className={styled.image_list}>
                {chartsVisible && ( // chartsVisible가 true일 때만 그래프 렌더링
                  <>
                    <li>
                      <SkillChart
                        labels={[
                          "발차기",
                          "펀치",
                          "지구력",
                          "체력",
                          "주량",
                          "돈 세는 속도",
                        ]}
                        dataPoints={[8, 7, 7, 8, 8, 10]}
                        title="현금호송 경비"
                      />
                    </li>
                    <li>
                      <SkillChart
                        labels={[
                          "HTML",
                          "CSS",
                          "JavaScript",
                          "JQuery",
                          "SwiperSlide",
                          "반응형웹",
                        ]}
                        dataPoints={[10, 9, 4, 7, 9, 8]}
                        title="웹 퍼블리셔"
                      />
                    </li>
                    <li>
                      <SkillChart
                        labels={[
                          "Java",
                          "Spring",
                          "Oracle",
                          "야근의 익숙함",
                          "JQuery",
                          "CRUD",
                        ]}
                        dataPoints={[8, 8, 7, 9, 9, 7]}
                        title="백엔드 기술"
                      />
                    </li>

                    <li>
                      <SkillChart
                        labels={[
                          "Java",
                          "Spring",
                          "Oracle",
                          "일하고싶은 열망",
                          "React",
                          "CRUD",
                        ]}
                        dataPoints={[8, 8, 7, 10, 6, 7]}
                        title="현재"
                      />
                    </li>
                  </>
                )}
              </ul>
            </section>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default AboutMe;
