import "./intro.scss";

function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img">
          <img src="images/boyy.gif" alt="coding_boy" />
        </div>
      </div>
      <div className="right">
        <div className="name">
          <h2>Hi There , I 'm</h2>
          <h1>Nishant Singh Yadav</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default intro;
