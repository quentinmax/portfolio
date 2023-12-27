import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useAnimation,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import MenuItem from "./MenuItem";
import MenuSocials from "./MenuSocials";

interface Props {
  setMenuVisible: Function;
  menuVisible: boolean;
}

const Menu: React.FC<Props> = ({ setMenuVisible, menuVisible }) => {
  const [leftScope, animateLeft] = useAnimate();
  const [rightScope, animateRight] = useAnimate();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight * 2);

  const springConfig = {
    stiffness: 100,
    damping: 20,
  };

  const initialY = -windowHeight; // Initial position for animations

  const leftY = useSpring(initialY, springConfig);
  const rightY = useSpring(-initialY, springConfig);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    leftY.set(menuVisible ? 0 : -windowHeight);
    rightY.set(menuVisible ? 0 : windowHeight);
  }, [menuVisible]);

  return (
    <div
      className="menu"
      style={{ pointerEvents: menuVisible ? "all" : "none" }}
    >
      <motion.div style={{ y: leftY }} className="menu-left">
        <h4>Navigation</h4>
        <Link to={"/#"} className="menu-link">
          <MenuItem menuVisible={menuVisible} title="Work" />
        </Link>
        <Link to={"/about"} className="menu-link">
          <MenuItem menuVisible={menuVisible} title="About" />
        </Link>
        <Link to={"/contact"} className="menu-link">
          <MenuItem menuVisible={menuVisible} title="Contact" />
        </Link>
      </motion.div>
      <motion.div style={{ y: rightY }} className="menu-right">
        <div className="logo">
          <img src="src/assets/logo.svg" alt="logo" height={100} />
        </div>
        <MenuSocials menuVisible={menuVisible} />
      </motion.div>
    </div>
  );
};

export default Menu;
