import React from "react";
import { Button, ButtonImg } from "./style";

import Facebook from "./imgProvisorio/facebook.svg";
import Instagram from "./imgProvisorio/instagram.svg";
import Twitter from "./imgProvisorio/twitter.svg";
import WhatsApp from "./imgProvisorio/whatsapp.svg";
import Messenger from "./imgProvisorio/facebook-messenger.svg";
import Telegram from "./imgProvisorio/telegram.svg";

function Buttons() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between mx-2.5 space-x-2 w-min min-w-fit sm:space-x-5">
        <div className={Button}>
          <img src={Facebook} alt="Facebook" className={ButtonImg} />
        </div>
        <div className={Button}>
          <img src={Instagram} alt="Instagram" className={ButtonImg} />
        </div>
        <div className={Button}>
          <img src={Twitter} alt="Twitter" className={ButtonImg} />
        </div>
        <div className={Button}>
          <img src={WhatsApp} alt="WhatsApp" className={ButtonImg} />
        </div>
        <div className={Button}>
          <img src={Messenger} alt="Messenger" className={ButtonImg} />
        </div>
        <div className={Button}>
          <img src={Telegram} alt="Telegram" className={ButtonImg} />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
