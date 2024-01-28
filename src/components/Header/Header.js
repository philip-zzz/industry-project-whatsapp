import "./Header.scss";
import arrow from "../../assets/icons/arrow-left.svg";
import avatar from "../../assets/icons/avatar.jpg";
import video from "../../assets/icons/video.svg";
import call from "../../assets/icons/phone.svg";

function Header(){
  return (
    <div className="header">
      <div className="header__back">
        <img src={arrow} alt="" />
      </div>
      <div className="header__profile">
        <img src={avatar} alt="" />
        <div className="header__profile__name">
          <h4 className="user-name">Tom & Jerry</h4>
          <p className="time">last seen today at 10:00 AM</p>
        </div>
      </div>
      <div className="header__actions">
        <div>
          <img src={video} alt="video" />
        </div>
        <div>
          <img src={call} alt="call" />
        </div>
      </div>
    </div>
  );
};

export default Header;
