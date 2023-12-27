import React from "react";
import { AnimatePresence, Variant, Variants, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  project: any;
  projects: any;
  currentSlide: number;
}

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 7,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      delay: index,
    },
  }),
  exit: {
    opacity: 0,
    y: 7,
    transition: {
      ease: "easeIn",
    },
  },
};

const parentVariant = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const ProjectInfo: React.FC<Props> = ({ project, projects, currentSlide }) => {
  return (
    <div className="project-info">
      <AnimatePresence mode="wait">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={`title-${project.title}`}
          transition={{ ease: "easeInOut" }}
          className="project-title"
        >
          {project.title}
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p
          key={`pagination-${project.title}`}
          variants={variants}
          custom={0.1}
          animate="animate"
          initial="initial"
          exit={"exit"}
          className="project-pagination"
        >{`${currentSlide + 1}/${projects.length}`}</motion.p>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={`description-${project.title}`}
          className="project-description"
          variants={variants}
          custom={0.2}
          animate="animate"
          initial="initial"
          exit={"exit"}
        >
          {project.description}
        </motion.p>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.p
          key={`date-${project.title}`}
          className="project-date"
          variants={variants}
          custom={0.3}
          animate="animate"
          initial="initial"
          exit={"exit"}
        >
          {project.date}
        </motion.p>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={`link-${project.title}`}
          className=""
          variants={variants}
          custom={0.4}
          animate="animate"
          initial="initial"
          exit={"exit"}
        >
          <Link to={`/projects/${project.title}`}>View Project</Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectInfo;
