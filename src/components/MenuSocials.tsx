import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";

const list = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface Props {
  menuVisible: boolean;
}

const MenuSocials: React.FC<Props> = ({ menuVisible }) => {
  return (
    <AnimatePresence>
      <motion.ul
        className="menu-socials"
        animate={menuVisible ? "open" : "close"}
        exit={"exit"}
        variants={list}
      >
        <motion.a
          className="social-item"
          target="_blank"
          href="https://github.com/quentinmax"
          variants={itemVariants}
        >
          <h4>Github</h4>
          <span>{"\u2197"}</span>
        </motion.a>
        <motion.a
          className="social-item"
          target="_blank"
          href="https://www.instagram.com/itz.quentin_/"
          variants={itemVariants}
        >
          <h4>Instagram</h4>
          <span>{"\u2197"}</span>
        </motion.a>
        {/* <motion.a
            className="social-item"
            href="https://www.instagram.com/itz.quentin_/"
          >
            <h4>Github</h4>
            <span>{"\u2197"}</span>
          </motion.a> */}
      </motion.ul>
    </AnimatePresence>
  );
};

export default MenuSocials;
