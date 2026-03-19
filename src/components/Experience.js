import React, { useState } from "react";
import style from "./Experience.module.css";

function Experience() {
  const [isOpen1, setIsOpen1] = useState(false); // 첫 번째 항목의 상태
  const [isOpen2, setIsOpen2] = useState(false); // 두 번째 항목의 상태
  const [isOpen3, setIsOpen3] = useState(false); 

  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1); // 첫 번째 항목의 상태 토글
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2); // 두 번째 항목의 상태 토글
  };

   const toggleOpen3 = () => {
    setIsOpen3(!isOpen3); // 두 번째 항목의 상태 토글
  };

  return (
    <div className={style.Experience_wrap}>
      <div>
        <h3>경력</h3>

        <ul>
          <li>
            <div className={style.Experience_box}>
              <div className={style.Experience_days}>2024.12 ~ 2025.12.31</div>
              <div>
                <p>
                  기적기획
                  <span>개발팀 · 대리 · 웹개발 (PHP 기반 쇼핑몰 / 프론트엔드)</span>
                </p>

                <div
                  className={
                    isOpen3 ? style.Experience_show : style.Experience_hide
                  }
                >
                  <p>
                    HTML5
                    <br />
                    CSS
                    <br />
                    JQuery
                    <br />
                    JavaScript
                    <br />
                    PHP
                    <br />
                    GNUBOARD
                    <br />
                    영카트
                    <br />
                    React
                    <br />
                    flutter
                    <br />
                    <hr />
                  </p>

                  <p>
                    기업/병원/쇼핑몰 웹사이트 구축 및 유지보수
                    <br />
                    PHP 기반 쇼핑몰(그누보드·영카트) 기능 고도화 및 유지보수 수행,
                    주문·결제·배송 로직 개선 및 쿠폰/할인 정책 기능 개발
                    <br />
                    텔레그램 API 연동을 통한 주문 알림 자동화 기능 구현으로
                    실시간 주문 모니터링 및 운영 효율 향상
                    <br />
                    반응형 웹 퍼블리싱 및 사용자 화면 개선
                    <br />
                    기존 레거시 구조 분석 및 기능 개선, 협업 대응
                    <br />
                    팀장 공백 상황에서 약 6개월간 팀 운영을 주도하며
                    디자인팀·영상팀과의 협업 및 일정/업무 조율,
                    클라이언트 직접 대응을 수행
                    <br />
                    내수용 flutter 어플리케이션 개발 - AI 적극활용
                    <br />
                    🏆 숙면팜 - 2025 웹어워드 최우수상 수상
                  </p>
                </div>
              </div>
            </div>
            <div
              className={style.Experience_under_line}
              onClick={toggleOpen3}
            >
              <p></p>
              <span>
                <svg
                  className={isOpen3 ? style.rotate : ""}
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
                    크로닉스 리포트
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
