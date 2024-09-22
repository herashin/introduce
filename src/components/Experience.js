import React, { useState } from "react";
import style from "./Experience.module.css";

function Experience() {
  const [isOpen1, setIsOpen1] = useState(false); // 첫 번째 항목의 상태
  const [isOpen2, setIsOpen2] = useState(false); // 두 번째 항목의 상태

  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1); // 첫 번째 항목의 상태 토글
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2); // 두 번째 항목의 상태 토글
  };

  return (
    <div className={style.Experience_wrap}>
      <div>
        <h3>경력</h3>

        <ul>
          <li>
            <div className={style.Experience_box}>
              <div className={style.Experience_days}>2023.03 ~ 2024.05</div>
              <div>
                <p>
                  ㈜인터페이스정보기술
                  <span>기술개발본부 · 주임/팀원 · 백엔드</span>
                </p>

                <div
                  className={
                    isOpen1 ? style.Experience_show : style.Experience_hide
                  }
                >
                  <p>
                    HTML5
                    <br />
                    CSS
                    <br />
                    JQuery <br />
                    JavaScript
                    <br />
                    JAVA
                    <br />
                    Spring
                    <br />
                    Mybatis
                    <br />
                    JSP
                    <br />
                    Oracle
                    <br />
                    AUI Grid
                    <br />
                    출력물 관리 프로그램
                    <br />
                    <hr />
                  </p>

                  <p>
                    경보제약 QMS : 교육자 모듈 개발, 유지보수
                    <br />
                    경보제약 QMS : 교육관리 모듈 개발, 유지보수
                    <br />
                    제일제약 QMS : 교육관리 모듈 개발, 유지보수
                    <br />
                    명인제약 LIMS : Audit Trail 이력관리 모듈 개발 <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className={style.Experience_under_line}
              onClick={toggleOpen1} // 클릭하면 첫 번째 항목의 상태 변경
            >
              <p></p>
              <span>
                <svg
                  className={isOpen1 ? style.rotate : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <polyline
                    points="10,30 50,70 90,30"
                    fill="none"
                    stroke="black"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p></p>
            </div>
          </li>

          <li>
            <div className={style.Experience_box}>
              <div className={style.Experience_days}>2019.11 ~ 2022.04</div>
              <div>
                <p>
                  굿데이컴퍼니
                  <span>개발팀 · 사원/팀원 2년차 · 퍼블리셔</span>
                </p>

                <div
                  className={
                    isOpen2 ? style.Experience_show : style.Experience_hide
                  }
                >
                  <p>
                    HTML5
                    <br />
                    CSS
                    <br />
                    JQuery <br />
                    JavaScript
                    <br />
                    Media Query
                    <br />
                    SwiperSlide
                    <br />
                    <hr />
                  </p>
                  <p>
                    쇼핑몰 웹 설계 및 사이트 리뉴얼
                    <br />
                    반응형 페이지 pc
                    <br />
                    펫카페 mobile 분리형 구조와 pc,mobile 일체형 구조 신규개발
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div
              className={style.Experience_under_line}
              onClick={toggleOpen2} // 클릭하면 두 번째 항목의 상태 변경
            >
              <p></p>
              <span>
                <svg
                  className={isOpen2 ? style.rotate : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <polyline
                    points="10,30 50,70 90,30"
                    fill="none"
                    stroke="black"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
