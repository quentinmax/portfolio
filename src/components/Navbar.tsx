import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  setMenuVisible: Function;
  menuVisible: boolean;
}

const Navbar: React.FC<Props> = ({ menuVisible, setMenuVisible }) => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <svg
          width="90"
          height="60"
          viewBox="0 0 30 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.71437 1C6.5321 1.04967 5.73463 1.26519 4.5321 1.54966C2.59536 2.00783 1.36546 3.71875 1.06635 5.67504C0.80802 7.36465 1.3402 9.19895 2.0366 10.7278C2.62467 12.0188 3.65262 12.94 5.0736 13.1901C6.52151 13.445 7.98122 12.9609 9.29531 12.3933C11.3884 11.4893 13.3366 10.0069 14.1024 7.77129C14.8374 5.62593 13.2963 3.07664 11.5321 2.09933C10.5398 1.54965 9.5321 0.823002 7.5321 1.04967M9.08862 8.08232C9.33201 9.26589 9.69614 10.6305 10.3234 11.6566C11.4153 13.4426 14.2817 13.1709 15.8176 12.4276C16.8602 11.923 17.7591 11.1837 18.33 10.0918C18.8379 9.12031 19.3514 8.38715 20.3682 8.02026C23.1313 7.02311 26.1764 7.36544 29 7.79179M22.0843 1C22.5329 4.53163 21.7539 9.98249 22.0843 13.5M27 1C27 4.53318 27.2938 9.96722 27 13.5"
            id="signature"
            // stroke="#d6d1ce"
            stroke="white"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
        </svg>
        {/* <img
          src="/public/logo.png"
          alt="logo"
          height={60}
          width={100}
          style={{ opacity: 0.7 }}
        /> */}
      </Link>
      {/* <div className="hamburger-menu"> */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className={
          menuVisible
            ? "hamburger-button-anim hamburger-button"
            : "hamburger-button"
        }
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <svg
          stroke="black"
          fill="none"
          className="hamburger"
          viewBox="-10 -10 120 120"
          width="60"
        >
          <path
            className="line"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </motion.button>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
