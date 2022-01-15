import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/portfolio/portfolio";
import Contact from "./Components/Contact/contact";
import Map from "./Components/Map/map";
import "./app.scss";

function App() {
  return (
    <div className="app">
      {/* //Component Calling */}
      <div className="navbar">
        <div className="sections">
          <Intro />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
