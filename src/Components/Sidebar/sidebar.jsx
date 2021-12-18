import "./sidebar.scss";

export default function menu({ menuOpen, setMenuOpen }) {
  return (
    //
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
