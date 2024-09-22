import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillChart = ({ labels, dataPoints, title }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: dataPoints,
        backgroundColor: "rgba(173, 216, 230, 0.2)", // 밝은 파란색 배경 (rgba)
        borderColor: "rgba(0, 191, 255, 1)", // 경계선 색상 (밝은 파란색)
        borderWidth: 2,
        pointBackgroundColor: "rgba(0, 191, 255, 1)", // 포인트 색상
        pointBorderColor: "#fff", // 포인트 테두리 색상
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0, 191, 255, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 10,
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // 그리드 선 색상 (투명도 포함)
        },
        pointLabels: {
          font: {
            size: 16, // 폰트 크기 설정
          },
          color: "#fff", // 라벨의 글자 색상 (기술명)
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff", // 범례 텍스트 색상
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default SkillChart;
