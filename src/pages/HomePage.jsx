import { Link, useNavigate } from "react-router";

import PersonalInfoIcon from "../components/icons/PersonalInfoIcon";
import DeviceIcon from "../components/icons/DeviceIcon";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import PasswordIcon from "./../components/icons/PasswordIcon";
import AlarmIcon from "../components/icons/AlarmIcon";
import GsmIcon from "./../components/icons/GsmIcon";
import PhoneIcon from "./../components/icons/PhoneIcon";
import ZoneIcon from "./../components/icons/ZoneIcon";
import OutputIcon from "../components/icons/OutputIcon";
import PowerIcon from "./../components/icons/PowerIcon";
import { useState } from "react";
import MenuPasswordModal from "../components/modals/MenuPasswordModal";
import SmsPasswordModal from "../components/modals/SmsPasswordModal";

const HomePage = () => {
  const [menuPasswordModal, setMenuPasswordModal] = useState(false);
  const [smsPasswordModal, setSmsPasswordModal] = useState(false);
  const onSubmitMenuPassword = (oldPassword, newPassword) => {
    console.log(oldPassword, newPassword);
  };
  const onSubmitSmsPassword = (oldPassword, newPassword) => {
    console.log(oldPassword, newPassword);
  };
  return (
    <div className="settings">
      <MenuPasswordModal
        isOpen={menuPasswordModal}
        onClose={() => setMenuPasswordModal(false)}
        onSubmit={onSubmitMenuPassword}
      />
      <SmsPasswordModal
        isOpen={smsPasswordModal}
        onClose={() => setSmsPasswordModal(false)}
        onSubmit={onSubmitSmsPassword}
      />
      <div className="header">
        <div className="icon"></div>
        <p className="header-title">VIRA v1.0.0</p>
        <div></div>
      </div>
      <div className="buttons">
        <Link to={"/time-settings"} className="button">
          <CalendarIcon />
          <p className="button-text">TIME SETTINGS</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/zone-settings"} className="button">
          <ZoneIcon />
          <p className="button-text">ZONE SETTINGS</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/zone-state"} className="button">
          <ZoneIcon />
          <p className="button-text">ZONE STATE</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <OutputIcon />
          <p className="button-text">OUTPUT SETTINGS</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <AlarmIcon />
          <p className="button-text">ALARM PERIOD</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <PowerIcon />
          <p className="button-text">SYSTEM MODE</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/time-settings"} className="button">
          <PhoneIcon />
          <p className="button-text">TELL SETTINGS</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
      </div>
      <div className="buttons">
        <Link to={"/my-devices"} className="button">
          <GsmIcon />
          <p className="button-text">GSM SETTINGS</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
        <div className="button-separator"></div>
        <Link to={"/gsm-control"} className="button">
          <GsmIcon />
          <p className="button-text">GSM NUMBER CONTROL</p>
          <ArrowRightIcon className="button-arrow" />
        </Link>
      </div>
      <div className="buttons">
        <div className="button" onClick={() => setMenuPasswordModal(true)}>
          <PasswordIcon />
          <p className="button-text">CHANGE MENU PASSWORD</p>
          <ArrowRightIcon className="button-arrow" />
        </div>
        <div className="button-separator"></div>
        <div className="button" onClick={() => setSmsPasswordModal(true)}>
          <PasswordIcon />
          <p className="button-text">CHANGE SMS PASSWORD</p>
          <ArrowRightIcon className="button-arrow" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
