import Favicon from "react-favicon";
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/portfolio/portfolio";
import Contact from "./Components/Contact/contact";
import Map from "./Components/Map/map";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Favicon url="https://user-images.githubusercontent.com/75436573/155814295-9b40c9cb-8528-4172-a5ba-13f2a14de963.png" />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
