import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,

      strings: ["Web Developer!", "Web Designer", "App Developer!", "Coder!"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="txt">
          <h1 className="first">IMAGINE</h1>
          <h1 className="second">
            &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;DEVELOPE
          </h1>
        </div>
        <div className="img">
          <img src="images/boyy.gif" alt="coding_boy" />
        </div>
      </div>
      <div className="right">
        <div className="name">
          <h2>Hi There , I 'm</h2>
          <h1>Nishant Singh Yadav</h1>
          <h3>
            &#160;
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
