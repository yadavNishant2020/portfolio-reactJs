import "./navbar.scss";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

export default function navbar({ menuopen, setMenuOpen }) {
  return (
    <div className={"navbar" + (menuopen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Nishant_Y
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 636 694 7041</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="mail" />
            <span>yadavnishant995@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger " onClick={() => setMenuOpen(!menuopen)}>
            <span className="line 1"></span>
            <span className="line 2"></span>
            <span className="line 3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
