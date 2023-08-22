import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Socials from "../components/Socials";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";
import transition from "../util/transition";
import Cursor from "../components/Cursor";
import Footer from "../sections/Footer";

// ("   oooooo   oooooo     oooo           oooo                                                  .o.");
// ("    `888.    `888.     .8'            `888                                                  888\n");
// ("     `888.   .8888.   .8'    .ooooo.   888   .ooooo.   .ooooo.  ooo. .oo.  .oo.    .ooooo.  888\n");
// ("      `888  .8'`888. .8'    d88' `88b  888  d88' `^Y8 d88' `88b `888P^Y88bP^Y88b  d88' `88b Y8P\n");
// ("       `888.8'  `888.8'     888ooo888  888  888       888   888  888   888   888  888ooo888 `8'\n");
// ("        `888'    `888'      888    .o  888  888   .o8 888   888  888   888   888  888    .o .o.\n");
// ("         `8'      `8'       `Y8bod8P' o888o `Y8bod8P' `Y8bod8P' o888o o888o o888o `Y8bod8P' Y8P\n");

const Home = () => {
  useEffect(() => {
    console.log(
      "   oooooo   oooooo     oooo           oooo                                                  .o.\n",
      "    `888.    `888.     .8'            `888                                                  888\n",
      "     `888.   .8888.   .8'    .ooooo.   888   .ooooo.   .ooooo.  ooo. .oo.  .oo.    .ooooo.  888\n",
      "      `888  .8'`888. .8'    d88' `88b  888  d88' `^Y8 d88' `88b `888P^Y88bP^Y88b  d88' `88b Y8P\n",
      "       `888.8'  `888.8'     888ooo888  888  888       888   888  888   888   888  888ooo888 `8'\n",
      "        `888'    `888'      888    .o  888  888   .o8 888   888  888   888   888  888    .o .o.\n",
      "         `8'      `8'       `Y8bod8P' o888o `Y8bod8P' `Y8bod8P' o888o o888o o888o `Y8bod8P' Y8P\n"
    );
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
      <Hero />
      <Socials />
      <Projects cursorRef={cursorRef} trailRef={trailRef} />
      <About />
      <Footer />
      <Menu setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
      <Cursor cursorRef={cursorRef} trailRef={trailRef} />
    </div>
  );
};

export default Home;
