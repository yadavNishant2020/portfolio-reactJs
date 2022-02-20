import "./about.scss";

function about() {
  return (
    <div className="about" id="about">
      <div className="left">
        <img src="images/pic.jpg" alt="" />
      </div>
      <div className="right">
        <h1>About Me</h1>
        <p>
          Hey!! everyone out their, I am Nishant, currently i am in second year
          at Chandigarh University persuring B.E (CSE).I Love to do Web and App
          Development using JavaScript , ReactJs and most obvious HTML & CSS. As
          i am in college i also do coding in C++ to solve some Ds Algo
          problems.When i am free i usually hit gym to add some muscles and
          maintain my fitness.Designing and Coding have been my passion since
          the days I started working with computers but I found myself into web
          design/development since 2017. I enjoy creating beautifully designed,
          intuitive and functional websites.
        </p>
        <h2>-Nishant Singh Yadav</h2>
      </div>
      <a href="#skill">
        <img src="images/down.png" alt="" />
      </a>
    </div>
  );
}

export default about;
