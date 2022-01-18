import "./portfolio.scss";

function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <p>SOME OF MY RECENT WORKS</p>

      <div className="container">
        <div className="items">
          <video src="video/tesla.mp4" autoPlay loop muted></video>
          <a
            href="https://tesla-66b35.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tesla Web App Clone
          </a>
        </div>
        <div className="items">
          <video src="video/chillZone.mp4" autoPlay loop muted></video>
          <a href="https://lnkd.in/dHX3zbs" target="_blank" rel="noreferrer">
            Chill Zone Website
          </a>
        </div>
        <div className="items">
          <video src="video/dice.mp4" autoPlay loop muted></video>
          <a
            href="https://tesla-66b35.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Dice Game
          </a>
        </div>
        <div className="items">
          <video src="video/googleEarth.mp4" autoPlay loop muted></video>
          <a href="https://lnkd.in/dqTihhp" target="_blank" rel="noreferrer">
            Google Earth
          </a>
        </div>
        <div className="items">
          <video src="video/pw.mp4" autoPlay loop muted></video>
          <a href="https://lnkd.in/eN_EpR3" target="_blank" rel="noreferrer">
            Portfolio Website
          </a>
        </div>
        <div className="items">
          <video src="video/tech.mp4" autoPlay loop muted></video>
          <a
            href="https://tesla-66b35.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tech Website Design
          </a>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
