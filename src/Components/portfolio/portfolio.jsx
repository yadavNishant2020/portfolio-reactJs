import "./portfolio.scss";

function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>MObile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="items">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y5nQpJevw4sc7eQzGxwx0iwgMewk5B1rMg&usqp=CAU"
            alt=""
            srcset=""
          />
          <h3>Blah App</h3>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
