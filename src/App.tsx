import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
