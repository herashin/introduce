import ProjectSection from "./ProjectSection/ProjectSection";
import styled from "./Project.module.css"; // 스타일 파일을 가정함

import sporters1 from "../../img/sporters1.png";
import sporters2 from "../../img/sporters2.gif";

import introduce1 from "../../img/introduce1.gif";
import introduce2 from "../../img/introduce2.gif";

import lafuma1 from "../../img/lafuma1.gif";
import lafuma2 from "../../img/lafuma2.gif";
import lafuma3 from "../../img/lafuma3.gif";

function Project() {
  const projectData = [
    {
      name: "포트폴리오 사이트",
      days: "2024.09.23 ~ 2024.10.21",
      teamSize: 1,
      images: [introduce1, introduce2],
      projctIntroduceText:
        "현재 보고계신 이 웹사이트가 포트폴리오 용도로 제작되었습니다. \n평범한 포트폴리오 사이트보다 조금 더 재미있는 요소를 추가해 사용자의 피로도를 덜고,\n신준호에 대한 흥미를 유발하기 위한 목적이 있습니다.",
      projectsimple:
        "포트폴리오 사이트는 개인 작업으로, \n리액트와 GitHub Pages를 이용하여 클라이언트 서버를 운영하고있으며, \nJAVA SPRING을 사용, CAFE24를 이용하여 백엔드 서버를 운영해 \n깃페이지에서 CAFE24서버로 REST api 형식으로 요청을 주고받습니다.",
      url: "https://herashin.github.io/introduce",
      skills: [
        "JavaScript",
        "React",
        "CSS3",
        "HTML5",
        "JAVA",
        "Spring",
        "Gradle",
        "MySql",
      ],

      serviceNow: "GitHub Pages 서비스중, cafe24서비스중",
    },
    {
      name: "Sporters",
      days: "2022.12.02 ~ 2023.01.03",
      teamSize: 5,
      images: [sporters1, sporters2],
      projctIntroduceText:
        "sport + Supporter 의 합성어로 \n스포츠를 도와주는 사람들의 모임이라는 뜻을 가지고 있습니다.\n Sporters서비스는 게시판 기능과 위치정보를 기반으로\n운동메이트를 구인하고 모임을 만들며 후기작성등을 지원하여,\n 손쉽게 소규모에서 대규모 운동을 즐길 수 있도록 도와주는 서비스입니다.",
      projectsimple:
        "메인페이지 날씨 API,지역별 게시판. \n함께 운동 후 후기를 남길 수 있는 운동 후기 게시판, 자유게시판 구현",
      url: "https://github.com/duck-ach/FINAL_PROJECT",
      skills: ["JavaScript", "React", "Node.js", "CSS"],
      serviceNow: "cafe24 기간만료",
    },

    {
      name: "Lafuma",
      days: "2019.05 ~ 2019.07",
      teamSize: 1,
      images: [lafuma1, lafuma2, lafuma3],
      projctIntroduceText:
        "퍼블리셔 첫번째 포트폴리오입니다.  \n기존의 Lafuma사이트를 재구성하였습니다.  \n포토샵을 사용하여, 기존 사이트 이미지를 레이어를 나누어 분리작업 후,  \n인터렉티브한 모션으로 재단장하여 이벤트와 상품의 주의력을 끌어주어  \n사용자의 집중력을 향상시켰습니다.  ",
      projectsimple:
        "Lafuma 프로젝트는 이커머스 웹사이트로, 개인 작업으로 진행되었습니다.사이트 모두 하드코딩으로 제작되었으며,  slide 이벤트를 직접 개발하였습니다. 기존의 이미지를 포토샵 편집하여 사용했고, NIKE와 Reebok같은 스포츠 사이트의 레이아웃을 참고하여 Lafuma사이트의 전체적인 레이아웃을 재구성 하였습니다. , ",

      url: "https://herashin.github.io/lafuma_2019/index.html",
      skills: ["JavaScript", "JQuery", "CSS3", "HTML", "Photoshop"],
      serviceNow: "GitHub Pages 서비스중",
    },
  ];

  return (
    <div className={styled.Project_wrap}>
      <div className={styled.Project_wrap_box}>
        <h2 className={styled.Project_wrap_box_title}>
          <span>PROJECT</span>
        </h2>

        {projectData.map((project, index) => (
          <div className={styled.Project_section_area} key={index}>
            <ProjectSection
              name={project.name}
              days={project.days}
              teamSize={project.teamSize}
              images={project.images}
              projctIntroduceText={project.projctIntroduceText}
              projectsimple={project.projectsimple}
              url={project.url}
              skills={project.skills}
              serviceNow={project.serviceNow}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
