import React from "react";
import { Link } from "react-router-dom";
import MenuSocials from "../components/MenuSocials";
import { useScroll, useTransform, motion } from "framer-motion";

const Footer = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.8, 1], [0, 225]);

  return (
    <motion.div className="footer-container" style={{ y }}>
      <h1>
        I caught your interest?
        <br /> Let's hook up!
      </h1>
      <hr />
      <div className="footer-content">
        <div className="nav-buttons">
          <Link to={"/work"}>Work</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <MenuSocials menuVisible={true} />
      </div>
      <div className="footer-info">
        <p>Copyright © 2023 | Made by Quentin Höhne with ♥️ and React</p>
        <p>Version 0.4</p>
      </div>
    </motion.div>
  );
};

export default Footer;
