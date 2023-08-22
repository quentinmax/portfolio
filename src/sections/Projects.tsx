import React from "react";
import ProjectGallery from "../components/ProjectGallery";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryItem from "../components/GalleryItem";
import { A11y } from "swiper/modules";
import ImageGallery from "../components/GPT";
import ProjectsSlider from "../components/ProjectsSlider";

interface Props {
  cursorRef: any;
  trailRef: any;
}

const Projects: React.FC<Props> = ({ cursorRef, trailRef }) => {
  return (
    <div className="project-container">
      <div className="header-container">
        <h4>Latest Projects</h4>
        <h1>Take a look at my current work.</h1>
      </div>
      <ProjectsSlider cursorRef={cursorRef} trailRef={trailRef} />

      {/* <ImageGallery />
      <ProjectGallery cursorRef={cursorRef} trailRef={trailRef} /> */}
    </div>
  );
};

export default Projects;
