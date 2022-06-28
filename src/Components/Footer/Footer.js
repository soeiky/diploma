import "./Footer.css";

import facebookImage from "../../assets/facebook.jpg";
import instagramImage from "../../assets/instagram.jpg";
import telegramImage from "../../assets/telegram.png";
import twitterImage from "../../assets/twitter.jpg";
import youtubeImage from "../../assets/youtube.jpg";


function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <h1> Best sneakers</h1>

        <ul className="ul">
          <li>
            <img className="icon" src={facebookImage} alt="tele" />
          </li>
          <li>
            <img className="icon" src={instagramImage} alt="tele" />
          </li>
          <li>
            <img className="icon" src={twitterImage} alt="tele" />
          </li>
          <li>
            <img className="icon" src={telegramImage} alt="tele" />
          </li>
          <li>
            <img className="icon" src={youtubeImage} alt="tele" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
  export default Footer;