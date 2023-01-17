import "./portfolio.scss";

function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <p>SOME OF MY RECENT WORKS</p>

      <div className="container">
        <div className="items">
          <video src="video/sbs-casa.mp4" autoPlay loop muted></video>
          <a
            href="https://sbs-casa-hostel.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            SBS Casa Hostels
          </a>
        </div>
        <div className="items">
          <video src="video/MarkAll.mp4" autoPlay loop muted></video>
          <a href="https://my-app-yadavnishant2020.vercel.app/" target="_blank" rel="noreferrer">
            MarkAll Website
          </a>
        </div>
        <div className="items">
          <video src="video/AgrimOverseas.mp4" autoPlay loop muted></video>
          <a href="http://www.agrimoverseas.com/" target="_blank" rel="noreferrer">
            Agrim Overseas Website
          </a>
        </div>
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
          <video src="video/Text-styler.mp4" autoPlay loop muted></video>
          <a
            href="https://text-styler-a3127.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Text Styler
          </a>
        </div>
        
     
      </div>
    </div>
  );
}

export default portfolio;
