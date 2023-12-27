import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import { useEffect } from "react";
import Project from "./screens/Project";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
  const location = useLocation();

  return (
    <ReactLenis root options={{ easing: "ease-in-out" }}>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
