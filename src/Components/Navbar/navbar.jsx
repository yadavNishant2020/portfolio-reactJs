import "./navbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

export default function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar" + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            NiShant
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 6386 694 7041</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>yadavnishant995@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger " onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line 1"></span>
            <span className="line 2"></span>
            <span className="line 3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
