import React from "react";
import { Link } from "react-router-dom";
import MenuSocials from "../components/MenuSocials";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="nav-buttons">
          <Link to={"/work"}>Work</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <MenuSocials menuVisible={true} />
      </div>
      <div className="footer-info">
        <p>Copyright © 2023 | Made by Quentin Höhne with Love and React</p>
        <p>Version 0.3</p>
      </div>
    </div>
  );
};

export default Footer;
