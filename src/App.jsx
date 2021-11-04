import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skill";
import Portfolio from "./Components/portfolio/portfolio";
import Contact from "./Components/Contact/contact";
import "./app.scss";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/sidebar";

function App() {
  const [menuopen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* //Component Calling */}
      <div className="navbar">
        {" "}
        <Navbar menuopen={menuopen} setMenuOpen={setMenuOpen} />
      </div>
      <Sidebar menuopen={menuopen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
