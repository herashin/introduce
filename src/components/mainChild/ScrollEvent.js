import React, { useRef, useEffect, useState } from "react";

import skill_spring from "../../img/spring.png";
import skill_react from "../../img/react.png";
import skill_gitpage from "../../img/gitpage.png";
import skill_cafe24 from "../../img/cafe24.webp";

const ScrollEvent = ({ onScrollComplete }) => {
  // onScrollComplete 콜백 추가
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [drawProgress, setDrawProgress] = useState(0); // 화살표 진행 상태

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤이 완료되면 콜백 호출
      if (drawProgress >= 1000) {
        onScrollComplete(); // 스크롤 이벤트가 끝났음을 부모 컴포넌트에 알림
      }

      setDrawProgress((prevProgress) => {
        if (currentScrollY > scrollY) {
          return Math.min(prevProgress + 5, 1000); // 더 세밀하게 진행 (최대 1000)
        } else {
          return Math.max(prevProgress - 5, 0); // 스크롤 업 시 점진적으로 감소
        }
      });

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, drawProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 화면 크기에 따른 캔버스 크기 조정
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 캔버스 초기화
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 텍스트 미리 배치 (비율에 맞게 설정)
    ctx.font = `${canvasWidth * 0.03}px Arial`; // 화면 크기에 맞춘 폰트 크기
    ctx.fillStyle = "black";

    // 이미지 로드
    const image1 = new Image();
    const image2 = new Image();
    const image3 = new Image();
    const image4 = new Image();

    // 이미지 소스 설정
    image1.src = skill_gitpage; // GitHub 이미지
    image2.src = skill_cafe24; // Cafe24 이미지
    image3.src = skill_react; // React 이미지
    image4.src = skill_spring; // Spring 이미지

    // 이미지가 모두 로드된 후 그리기
    const drawImages = () => {
      ctx.drawImage(image1, 50, 250, 150, 150); // 첫 번째 이미지 (GitHub)
      ctx.drawImage(image2, canvasWidth - 200, 50, 150, 150); // 두 번째 이미지 (Cafe24)
      ctx.drawImage(image3, 50, canvasHeight - 200, 150, 150); // 세 번째 이미지 (React)
      ctx.drawImage(image4, canvasWidth - 200, canvasHeight - 200, 150, 150); // 네 번째 이미지 (Java Spring)

      // 와이파이 모양 그리기
      drawWifi(ctx, 125, 125, drawProgress); // GitHub 이미지 위 (x: 125, y: 125)
    };

    // 각 이미지가 로드된 후 그리기 실행
    image1.onload = () => {
      image2.onload = () => {
        image3.onload = () => {
          image4.onload = drawImages;
        };
      };
    };

    // 점선 그리기 경로 설정
    ctx.beginPath();
    ctx.setLineDash([5, 5]); // 점선 패턴 (5px 선, 5px 간격)
    ctx.moveTo(125, canvasHeight - 200); // skill_react 이미지 중심 위쪽 (X: 50 + 75, Y: canvasHeight - 200)

    // 점선 그리기 - drawProgress 값을 세밀하게 나눠서 부드럽게 그리기
    const maxDrawLength = 200; // 총 진행될 점선의 길이
    const drawLength = (drawProgress / maxDrawLength) * (canvasHeight - 350); // 전체 길이에 대한 비율로 진행

    if (drawLength > 0) {
      ctx.lineTo(125, canvasHeight - 200 - drawLength); // 점선을 위로 그리기 (Y좌표 감소)
    }
    if (drawLength >= canvasHeight - 350 - 150) {
      ctx.lineTo(125, 150); // 점선이 skill_gitpage 위치까지 도달
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [drawProgress]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth * 0.8}
      height={window.innerHeight * 0.8}
    />
  );
};

const drawWifi = (ctx, x, y, progress) => {
  ctx.setLineDash([]); // 점선 패턴 해제
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";

  const step = progress / 1000; // 스크롤 진행에 따른 값

  // 가장 큰 바깥쪽 호
  if (step >= 0.3) {
    ctx.beginPath();
    ctx.lineWidth = 5; // 선 굵기
    ctx.arc(x, y, 50, Math.PI * 1.1, Math.PI * 1.9, false); // 가장 큰 호
    ctx.stroke();
  }

  // 중간 호
  if (step >= 0.6) {
    ctx.beginPath();
    ctx.lineWidth = 5; // 선 굵기
    ctx.arc(x, y + 30, 35, Math.PI * 1.1, Math.PI * 1.9, false); // 중간 크기 호
    ctx.stroke();
  }

  // 작은 호
  if (step >= 0.9) {
    ctx.beginPath();
    ctx.lineWidth = 5; // 선 굵기
    ctx.arc(x, y + 60, 20, Math.PI * 1.1, Math.PI * 1.9, false); // 작은 크기 호
    ctx.stroke();
  }

  // 와이파이 점
  if (step >= 1.0) {
    ctx.beginPath();
    ctx.arc(x, y + 90, 10, 0, 2 * Math.PI); // 아래에 작은 점
    ctx.fill();
  }
};

export default ScrollEvent;
