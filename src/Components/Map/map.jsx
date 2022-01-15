import "./map.scss";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function map() {
  return (
    <section className="footerSection" style={{ height: "60%" }}>
      <div className="map">
        <div className="location">
          <p className="heading">Here is me</p>
          <p className="address">Malviya Nagar,New Delhi, India</p>
          <a
            href="https://www.google.com/maps/place/DDA+Flats,+Malviya+Nagar,+New+Delhi,+Delhi+110017/@28.5339367,77.2088898,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce21dd273638b:0xeac7b1918b30d0d9!8m2!3d28.5331376!4d77.2110547"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Open in google map
          </a>
        </div>
      </div>
      <footer id="footer">
        <div class="footer-container">
          <div class="left-col">
            <div class="social-media">
              <a
                href="https://www.facebook.com/sidd.yadav.73"
                target="_blank"
                rel="noreferrer"
              >
                <i>{<FaFacebookSquare />}</i>
              </a>
              <a
                href="https://twitter.com/NishantSinghY15"
                target="_blank"
                rel="noreferrer"
              >
                <i>{<FaTwitter />}</i>
              </a>
              <a
                href="https://www.instagram.com/_notorious_yadav_/"
                target="_blank"
                rel="noreferrer"
              >
                <i>{<FaInstagram />}</i>
              </a>
              <a
                href="https://www.linkedin.com/in/nishant-singh-yadav-9112ab1bb/"
                target="_blank"
                rel="noreferrer"
              >
                <i>{<FaLinkedin />}</i>
              </a>
            </div>
            <p class="rights-text">© 2021 Created By Nishant Singh Yadav.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default map;
