import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skill";
import Portfolio from "./Components/portfolio/portfolio";
import Contact from "./Components/Contact/contact";
import Map from "./Components/Map/map";
import "./app.scss";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* //Component Calling */}
      <div className="navbar">
        {" "}
        <Navbar menuopen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Sidebar menuopen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Map />
      </div>
    </div>
  );
}

export default App;
