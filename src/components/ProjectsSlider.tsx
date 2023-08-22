import React, { useState } from "react";
import SliderItem from "./SliderItem";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo";

const projects = [
  {
    id: 1,
    title: "Summit",
    description:
      "A mobile app developed for hikers that want to keep track of their summitet Peaks.",
    date: new Date().toLocaleDateString(),
    thumbnail: "/public/image1.jpg",
  },
  {
    id: 2,
    title: "AbiMaster",
    description:
      "A mobile app for students making their Abitur. It keeps track of the grades and calculates the current average.",
    date: new Date().toLocaleDateString(),
    thumbnail: "/public/image2.jpg",
  },
  {
    id: 3,
    title: "kab architekten",
    description:
      "A mobile app for students making their Abitur. It keeps track of the grades and calculates the current average.",
    date: new Date().toLocaleDateString(),
    thumbnail: "/public/image3.jpg",
  },
];

interface Props {
  cursorRef: any;
  trailRef: any;
}

const ProjectsSlider: React.FC<Props> = ({ cursorRef, trailRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dir, setDir] = useState(-1);
  const [disableButtons, setDisableButtons] = useState(false);

  const screenWidth = window.innerWidth;

  const onMouseEnter = () => {
    cursorRef.current.className = "cursor interactable";
    trailRef.current.className = "cursor-trail trail-interactable";
  };

  const onMouseLeave = () => {
    trailRef.current.className = "cursor-trail";
    cursorRef.current.className = "cursor";
  };

  const handlePreviousButton = () => {
    setDisableButtons(true);

    if (currentSlide === 0) {
      setCurrentSlide(projects.length - 1);
    } else {
      setCurrentSlide((prev) => (prev -= 1));
    }
    setTimeout(() => setDisableButtons(false), 800);
  };

  const handleNextButton = () => {
    setDisableButtons(true);
    if (currentSlide === projects.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => (prev += 1));
    }
    setTimeout(() => setDisableButtons(false), 800);
  };

  console.log(currentSlide);

  return (
    <div className="slider-container">
      <div className="outter">
        <div className="left-slider slider-base">
          <AnimatePresence mode="popLayout">
            <motion.img
              onPointerLeave={onMouseLeave}
              onPointerEnter={onMouseEnter}
              key={projects[currentSlide].thumbnail}
              initial={{ scale: 2, x: screenWidth * 0.8 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ x: -screenWidth }}
              transition={{
                duration: 0.8,
                ease: [0.61, 0.41, 0.05, 0.985],
              }}
              src={projects[currentSlide].thumbnail}
              alt={"project thumbnail"}
            />
          </AnimatePresence>

          {/* <img
            src={
              currentSlide === projects.length - 1
                ? projects[0].thumbnail
                : projects[currentSlide + 1].thumbnail
            }
            alt={"project thumbnail"}
          /> */}
        </div>
        <ProjectInfo
          currentSlide={currentSlide}
          project={projects[currentSlide]}
          projects={projects}
        />
        <div className="right-slider slider-base">
          {/* <img
            src={
              currentSlide === projects.length - 1
                ? projects[0].thumbnail
                : projects[currentSlide + 1].thumbnail
            }
            alt={"project thumbnail"}
          /> */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`${projects[currentSlide].thumbnail}other`}
              initial={{ scale: 2, x: screenWidth * 0.55 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 2, x: -screenWidth * 0.55 }}
              transition={{
                duration: 0.3,
                ease: [0.61, 0.41, 0.05, 0.985],
              }}
              src={
                currentSlide === projects.length - 1
                  ? projects[0].thumbnail
                  : projects[currentSlide + 1].thumbnail
              }
              alt={"project thumbnail"}
            />
          </AnimatePresence>
        </div>
      </div>
      <nav className="slider-nav">
        <button disabled={disableButtons} onClick={handlePreviousButton}>
          <FiChevronLeft color="#d1d1ce" size={25} />
        </button>
        <button disabled={disableButtons} onClick={handleNextButton}>
          <FiChevronRight color="#d1d1ce" size={25} />
        </button>
      </nav>
    </div>
  );
};

export default ProjectsSlider;
