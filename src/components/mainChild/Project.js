import ProjectSection from "./ProjectSection/ProjectSection";
import styled from "./Project.module.css"; // 스타일 파일을 가정함

import sporters1 from "../../img/sporters1.png";
import sporters2 from "../../img/sporters2.gif";

import introduce1 from "../../img/introduce1.gif";
import introduce2 from "../../img/introduce2.gif";

import lafuma1 from "../../img/lafuma1.gif";
import lafuma2 from "../../img/lafuma2.gif";
import lafuma3 from "../../img/lafuma3.gif";


import jeil01 from "../../img/jeil01.png";
import jeil02 from "../../img/jeil02.gif";
import jeil03 from "../../img/jeil02.gif";

import flara01 from "../../img/flara01.gif";
import flara02 from "../../img/flara02.gif";


import brown01 from "../../img/brown01.gif";
import brown02 from "../../img/brown02.gif";


import coar01 from "../../img/coar01.gif";
import coar02 from "../../img/coar02.gif";

function Project() {
  const projectData = [
    {
      name: "포트폴리오 사이트",
      days: "2024.09.23 ~",
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
      name: "제일정육",
      days: "2024.12.15 ~ 2025.01.03",
      teamSize: 1,
      images: [jeil01, jeil02, jeil03],
      projctIntroduceText:
        "제일정육은 식품 사업자를 타겟으로 기획한 첫 번째 개인 프로젝트로,\n기획부터 이미지수집 및 기능구현등 혼자 진행하였습니다. \n실제 거주지였던 독산동 우시장의 생동감에서 영감을 얻었습니다. \n원육의 신선한 질감을 시각적으로 전달하기 위해 \n강렬한 레드 컬러를 시그니처 색상으로 채택하여 브랜드의 정체성을 강조했습니다.",
      projectsimple:
        "그누보드(PHP/MySQL) 기반의 CMS를 활용하여 사이트를 구축하였습니다.\n기업의 정체성을 전달하는 Info 및 History 페이지를 구현하였으며,\n다양한 스크립트 기능을 활용하여 사용자 인터랙션의 몰입감을 높였습니다.\n또한, 축산물 유통 구조에 맞춘 제품 카테고리 분류 시스템을 개발하여\n사용자가 품목별로 상품을 직관적으로 탐색하고 정렬할 수 있도록 설계하였습니다.",
      url: "https://www.mmcmso.com/template/jeilmeat/",
      skills: [
        "그누보드",
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "PHP",
        "mySql",
        "GSAP",
      ],
      serviceNow: "cafe24 운영중",
    },
    {
      name: "Flara",
      days: "2025.01.13 ~ 2025.02.07",
      teamSize: 1,
      images: [flara01, flara02],
      projctIntroduceText:
        "Flara는 기존에 시도하지 않았던 새로운 업종에 대한 도전으로 기획한 \n화장품 브랜드 쇼핑몰 프로젝트입니다. \n 기획, 이미지수집, 기능 개발",
      projectsimple:
        "그누보드 및 영카트(PHP/MySQL) 기반의 솔루션을 \n활용하여 이커머스 환경을 구축하였습니다.\n브랜드 고유의 감성을 전달하기 위해 \n고해상도의 비주얼 배너를 전략적으로 배치하였으며,\n제품의 색상과 질감이 돋보일 수 있도록 레이아웃 전체를 \n화이트톤으로 설계하여 시각적 몰입감을 극대화하였습니다.",
      url: "http://www.miracleconsulting.co.kr/",
      skills: [
        "그누보드",
        "영카트",
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "PHP",
        "mySql",
      ],
      serviceNow: "cafe24 운영중",
    },
    {
      name: "Brown Brother",
      days: "2025.03.04 ~ 2025.03.14",
      teamSize: 1,
      images: [brown01, brown02],
      projctIntroduceText:
        "브라운 브라더는 평소 관심이 있던 가죽공방에서 영감을 받아 제작하였습니다.\n 기획, 기획, 이미지수집, 기능 개발",
      projectsimple:
        "이 프로젝트는 소상공인 및 자영업자를 타겟으로 기획한 \n원페이지(One-page) 형식의 포트폴리오로\n단일 페이지 내에서 모든 정보가 완결되는 구조를 통해\n서비스의 핵심 내용을 직관적으로 전달합니다.\n스크롤의 흐름에 따라 사용자 집중도가 흐트러지지 않도록 \n시각적 전달력을 최우선으로 작업하였으며,\n페이지 곳곳에 다양한 인터랙션 액션을 배치하여 \n단조로움을 피하고 사용자 참여를 유도하도록 설계하였습니다.",
      url: "https://www.mmcmso.com/template/brownbrother/",
      skills: [
        "그누보드",
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "PHP",
        "mySql",
        "GSAP",
      ],
      serviceNow: "cafe24 운영중",
    },
     {
      name: "Pilates COAR",
      days: "2025.03.17 ~ 2025.03.28",
      teamSize: 1,
      images: [coar01, coar02],
      projctIntroduceText:
        "필라테스 코아는 기존에 해보지않았던 장르인 헬스 사업을 겨냥하여 제작하였습니다.\n 기획, 기획, 이미지수집, 기능 개발",
      projectsimple:
        "필라테스 프로젝트는 앞선 '브라운 브라더'에 이어 \n원페이지(One-page) 형식으로 설계한 포트폴리오로\n헬스 및 웰니스 사업자를 타겟으로 기획하여 \n업종의 전문성을 시각적으로 구현하였습니다.\n실제 필라테스 사업장에서 사용하는 기구 이미지와 \n교육 커리큘럼 콘텐츠를 상세 페이지에 자연스럽게 녹여내었으며,\n사용자의 스크롤 흐름에 맞춘 동적인 레이아웃을 통해 \n서비스의 신뢰도와 몰입감을 높였습니다.",
      url: "https://www.mmcmso.com/template/mpilates/",
      skills: [
        "그누보드",
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "PHP",
        "mySql",
        "GSAP",
      ],
      serviceNow: "cafe24 운영중",
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
      skills: [
        "JavaScript",
        "jQuery",
        "CSS3",
        "HTML5",
        "JSP",
        "JAVA",
        "Spring",
        "Mybatis",
        "Oracle",
      ],
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
