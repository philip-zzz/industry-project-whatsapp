import "./Footer.scss";
import camera from "../../assets/icons/camera.svg";
import mic from "../../assets/icons/mic.svg";
import plus from "../../assets/icons/plus.svg";
import sticker from "../../assets/icons/sticker.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="header__back">
        <img src={plus} alt="" />
      </div>
      <div className="footer__message">
        <input type="text" placeholder="Type your message" />
        <img src={sticker} alt="" />
      </div>
      <div className="footer__actions">
        <div>
          <img src={camera} alt="camera" />
        </div>
        <div>
          <img src={mic} alt="mic" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
