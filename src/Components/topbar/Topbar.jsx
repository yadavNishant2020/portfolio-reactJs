import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrappers">
        <div className="lefts">
          <a href="#intro" className="logos">
            NiShant
          </a>
          <div className="itemContainers">
            <Person className="icons" />
            <span className="names">+91 6386 694 7041</span>
          </div>
          <div className="itemContainers">
            <Mail className="icons" />
            <span className="names">yadavnishant995@gmail.com</span>
          </div>
        </div>
        <div className="rights">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
