import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/projects.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/menu.css";
import "./styles/gpt.css";
import "./styles/footer.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence initial={true} mode="wait">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
