import React from "react";
import { Button } from "./style";

import Facebook from "./imgProvisorio/facebook.svg";
import Instagram from "./imgProvisorio/instagram.svg";
import Twitter from "./imgProvisorio/twitter.svg";
import WhatsApp from "./imgProvisorio/whatsapp.svg";
import Messenger from "./imgProvisorio/facebook-messenger.svg";
import Telegram from "./imgProvisorio/telegram.svg";

function Buttons() {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-5 sm:space-x-10">
        <a href="#">
          <img src={Facebook} alt="Facebook" className={Button} />
        </a>
        <a href="#">
          <img src={Instagram} alt="Instagram" className={Button} />
        </a>
        <a href="#">
          <img src={Twitter} alt="Twitter" className={Button} />
        </a>
        <a href="#">
          <img src={WhatsApp} alt="WhatsApp" className={Button} />
        </a>
        <a href="#">
          <img src={Messenger} alt="Messenger" className={Button} />
        </a>
        <a href="#">
          <img src={Telegram} alt="Telegram" className={Button} />
        </a>
      </div>
    </div>
  );
}

export default Buttons;
