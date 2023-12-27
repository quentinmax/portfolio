import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo";
import useMeasure from "react-use-measure";

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
      "A mobile app for students doing their Abitur. It keeps track of the grades and calculates the current average.",
    date: new Date().toLocaleDateString(),
    thumbnail: "/public/image2.jpg",
  },
  {
    id: 3,
    title: "kab architekten",
    description:
      "A mobile app for students doing their Abitur. It keeps track of the grades and calculates the current average.",
    date: new Date().toLocaleDateString(),
    thumbnail: "/public/image3.jpg",
  },
];

// const variants = {
//   enter: ({ direction, width }) => ({ x: direction * width }),
//   center: { x: 0 },
//   exit: ({ direction, width }) => ({ x: direction * -width }),
// };

interface Props {
  cursorRef: any;
  trailRef: any;
}

const ProjectsSlider: React.FC<Props> = ({ cursorRef, trailRef }) => {
  const [disableButtons, setDisableButtons] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tuple, setTuple] = useState([null, currentSlide]); //[prev, current]
  const [dir, setDir] = useState("increasing");

  useEffect(() => {
    if (tuple[1] !== currentSlide) {
      setTuple([tuple[1], currentSlide]);
    }
  }, [currentSlide]);

  useEffect(() => {
    let prev = tuple[0]!;
    console.log(tuple, prev);
    let direction = currentSlide > prev ? "increasing" : "decreasing";
    setDir(direction);
  }, [tuple]);

  const navigate = useNavigate();
  const [leftContainerRef, { width: leftContainerWidth }] = useMeasure();
  const [rightContainerRef, { width: rightContainerWidth }] = useMeasure();

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

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     handleNextButton();
  //   }, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [currentSlide]);

  console.log(currentSlide);

  return (
    <div className="slider-container">
      <div className="outter">
        <div ref={leftContainerRef} className="left-slider slider-base">
          <AnimatePresence mode="popLayout">
            <motion.img
              onClick={() =>
                navigate(`/project/${projects[currentSlide].title}`)
              }
              onPointerLeave={onMouseLeave}
              onPointerEnter={onMouseEnter}
              key={projects[currentSlide]?.thumbnail}
              initial={{
                scale: 1.6,
                // x: dir === "increasing" ? width * 1.4 : -width * 1.4,
                x: leftContainerWidth * 1.3,
              }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 1, x: -leftContainerWidth }}
              // custom={{direction, width}}
              transition={{
                duration: 0.8,
                // ease: [0.61, 0.41, 0.05, 0.985],
                ease: [0.695, 0.08, 0.0, 0.99],
              }}
              src={projects[currentSlide]?.thumbnail}
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
        <div ref={rightContainerRef} className="right-slider slider-base">
          {/* <img
            src={
              currentSlide === projects.length - 1
                ? projects[0].thumbnail
                : projects[currentSlide + 1].thumbnail
            }
            alt={"project thumbnail"}
          /> */}
          <AnimatePresence mode="popLayout">
            <motion.img
              key={`${projects[currentSlide]?.thumbnail}other`}
              initial={{ scale: 1, x: rightContainerWidth * 1.4 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 1, x: -rightContainerWidth * 1.4 }}
              transition={{
                duration: 0.8,
                ease: [0.29, 0.89, 0.795, 1.005],
              }}
              src={
                currentSlide === projects.length - 1
                  ? projects[0]?.thumbnail
                  : projects[currentSlide + 1]?.thumbnail
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
