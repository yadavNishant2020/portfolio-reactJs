import "./sidebar.scss";

export default function menu(menuopen, setMenuOpen) {
  return (
    // {"navbar" + (menuopen && "active")}
    <div className="menu">
      <ul>
        {/* onClick={() => setMenuOpen(false)} */}
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
