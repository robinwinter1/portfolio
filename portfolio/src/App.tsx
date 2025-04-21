import React from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutMePage } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div style={{ backgroundColor: "#4b8bc3", minHeight: "100vh" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
