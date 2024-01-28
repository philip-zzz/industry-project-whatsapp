import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="time-stamp">
        <p>Decmber 24th, 2024</p>
      </div>

      <div className="message__sender">
        <p className="message__sender__text">Hello, how are you?</p>
        <p className="message__sender__timestamp">10:01 am</p>
      </div>

      <div className="message__receiver">
        <p className="message__receiver__text">
          Hi! I'm doing well, thanks. How about you?
        </p>
        <p className="message__receiver__timestamp">10:17 am</p>
      </div>

      <div className="message__sender">
        <p className="message__sender__text">
          I'm good too. Anything exciting happening?
        </p>
        <p className="message__sender__timestamp">10:18 am</p>
      </div>

      <div>
        <div className="message__receiver">
          <p className="message__receiver__text">
            Not much, just the usual. How about you?
          </p>
          <p className="message__receiver__timestamp"></p>
          <p className="message__receiver__timestamp">10:23 am</p>
        </div>
      </div>

    </div>
  );
};

export default MainPage;
