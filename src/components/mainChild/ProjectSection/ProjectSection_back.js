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
  description,
  url,
  techStack,
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
          <p>{description}</p>
          <div>
            <strong>주요 기능:</strong> {techStack}
          </div>
          <div>
            <strong>URL:</strong>{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
