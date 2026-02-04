import { useState } from "react";
import { useTranslation } from "react-i18next";

import PowerIcon from "./../components/icons/PowerIcon";
import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import CustomButton from "../components/shared/CustomButton";
import CustomDropdown from './../components/shared/CustomDropdown';
import LobymanIcon from './../components/icons/LobymanIcon';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const [deviceStatus, setDeviceStatus] = useState(false);
  const [relayNumber, setRelayNumber]  = useState(1);

  return (
    <div className="home-page">
      <details className="accordion">
        <summary className="title">
          <PowerIcon />
          <span className="accordion-text">{t("homePage:device_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content dual-button">
          <CustomButton
            text={t("homePage:lock")}
            outline={deviceStatus}
            onClick={() => setDeviceStatus(false)}
          />
          <CustomButton
            text={t("homePage:unlock")}
            outline={!deviceStatus}
            onClick={() => setDeviceStatus(true)}
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <LobymanIcon />
          <span className="accordion-text">{t("homePage:relays_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
              value={relayNumber}
              setValue={setRelayNumber}
              options={[
                { text: t("homePage:relay_number", {number: 1}), value: 1 },
                { text: t("homePage:relay_number", {number: 2}), value: 2 },
                { text: t("homePage:relay_number", {number: 3}), value: 3 },
                { text: t("homePage:relay_number", {number: 4}), value: 4 },
                { text: t("homePage:relay_number", {number: 5}), value: 5 },
                { text: t("homePage:relay_number", {number: 6}), value: 6 },
                { text: t("homePage:relay_number", {number: 7}), value: 7 },
                { text: t("homePage:relay_number", {number: 8}), value: 8 },
                { text: t("homePage:relay_number", {number: 9}), value: 9 },
                { text: t("homePage:relay_number", {number: 10}), value: 10 },
              ]}
              containerStyle={{width: "100%", marginBottom: 16}}
            />
          <div className="dual-button">
            <CustomButton
            text={t("homePage:lock")}
            outline={deviceStatus}
            onClick={() => setDeviceStatus(false)}
          />
          <CustomButton
            text={t("homePage:unlock")}
            outline={!deviceStatus}
            onClick={() => setDeviceStatus(true)}
          />
          </div>
        </div>
      </details>
    </div>
  );
};

export default HomePage;
