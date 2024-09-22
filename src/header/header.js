import React, { useState } from "react";
import styled from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn); // 메뉴 상태 토글
  };

  const closeMenu = () => {
    setMenuOn(false); // 메뉴 닫기
  };

  return (
    <div>
      {/* 헤더 영역 */}
      <div className={`${styled.header_wrap} ${menuOn ? styled.expanded : ""}`}>
        <div
          className={`${styled.hamburger} ${menuOn ? styled.active : ""}`}
          onClick={toggleMenu}
        >
          {/* 햄버거 아이콘 */}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>
          천천히 살피다
          <br />
          가시옵소서
        </h1>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              소개 (About Me)
            </Link>
            {/* <a href="/">소개 (About Me)</a> */}
          </li>
          <li>
            <Link to="/experience" onClick={closeMenu}>
              경력 (Experience)
            </Link>
            {/* <a href="/experience">경력 (Experience)</a> */}
          </li>
          <li>기술 스택 (Skills)</li>
        </ul>
      </div>

      {/* 검정색 반투명 배경 */}
      <div
        className={`${styled.overlay} ${menuOn ? styled.visible : ""}`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}

export default Header;
