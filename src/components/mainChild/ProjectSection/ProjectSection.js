import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styled from "./ProjectSection.module.css";

const ProjectSection = ({
  name,
  days,
  teamSize,
  images,
  projctIntroduceText,
  projectsimple,
  url,
  skills = [], // skills를 기본적으로 빈 배열로 설정
  serviceNow,
}) => {
  return (
    <div className={styled.Project_section}>
      <h4 className={styled.Project_name}>{name}</h4>
      <p className={styled.Project_days}>
        {days} (작업인원 {teamSize}명)
      </p>

      <div className={styled.Project_content_wrapper}>
        {/* Swiper 슬라이드 섹션 */}
        <div className={styled.Project_introduce_box_slide}>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Project ${name} Image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 프로젝트 설명 텍스트 섹션 */}
        <div className={styled.Project_introduce_box_text}>
          <h3>{name}</h3>
          {projctIntroduceText.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <div className={styled.Project_introduce_box_projectsimple}>
            <strong>주요 기능: </strong>
            {projectsimple.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className={styled.Project_introduce_box_url}>
            <strong>URL:</strong>
            <a
              className={styled.Project_introduce_box_url_a_event}
              href={url}
              target="_blank"
              data-hover={url}
            >
              {url}
            </a>
          </div>
          <ul className={styled.Project_introduce_box_skill_box}>
            {skills.map((skill, index) => (
              <li className={styled.Project_introduce_box_skills} key={index}>
                {skill}
              </li>
            ))}
          </ul>
          <p>{serviceNow}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
