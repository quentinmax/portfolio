import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  project: any;
  projects: any;
  currentSlide: number;
}

const ProjectInfo: React.FC<Props> = ({ project, projects, currentSlide }) => {
  return (
    <div className="project-info">
      <AnimatePresence>
        <motion.h1 className="project-title">{project.title}</motion.h1>
        <motion.p className="project-pagination">{`${currentSlide + 1}/${
          projects.length
        }`}</motion.p>
        <motion.p className="project-description">
          {project.description}
        </motion.p>
        <motion.p className="project-date">{project.date}</motion.p>
        <motion.div className="">
          <Link to={`/projects/${project.title}`}>View Project</Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectInfo;
