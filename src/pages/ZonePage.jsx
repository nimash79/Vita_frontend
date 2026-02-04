import { useState } from "react";
import { useTranslation } from "react-i18next";

import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import CustomButton from "../components/shared/CustomButton";
import CustomDropdown from "./../components/shared/CustomDropdown";
import ZoneIcon from "./../components/icons/ZoneIcon";
import SettingsIcon from "./../components/icons/SettingsIcon";

const ZonePage = () => {
  const { t } = useTranslation();
  const [zoneNumber, setZoneNumber] = useState(1);
  const [zoneType, setZoneType] = useState("fire");
  const [operatinStatus, setOperatingStatus] = useState(false);
  const [outputType, setOutputType] = useState("ding_dong");

  return (
    <div className="home-page">
      <details className="accordion">
        <summary className="title">
          <SettingsIcon />
          <span className="accordion-text">{t("zonePage:zones_settings")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={zoneNumber}
            setValue={setZoneNumber}
            options={[
              {
                text: `${t("zonePage:zone_number", { number: 1 })} (${t("zonePage:wired")})`,
                value: 1,
              },
              {
                text: `${t("zonePage:zone_number", { number: 2 })} (${t("zonePage:wired")})`,
                value: 2,
              },
              {
                text: `${t("zonePage:zone_number", { number: 3 })} (${t("zonePage:wired")})`,
                value: 3,
              },
              {
                text: `${t("zonePage:zone_number", { number: 4 })} (${t("zonePage:wired")})`,
                value: 4,
              },
              {
                text: `${t("zonePage:zone_number", { number: 5 })} (${t("zonePage:wired")})`,
                value: 5,
              },
              {
                text: `${t("zonePage:zone_number", { number: 6 })} (${t("zonePage:wireless")})`,
                value: 6,
              },
              {
                text: `${t("zonePage:zone_number", { number: 7 })} (${t("zonePage:wireless")})`,
                value: 7,
              },
              {
                text: `${t("zonePage:zone_number", { number: 8 })} (${t("zonePage:wireless")})`,
                value: 8,
              },
              {
                text: `${t("zonePage:zone_number", { number: 9 })} (${t("zonePage:wireless")})`,
                value: 9,
              },
              {
                text: `${t("zonePage:zone_number", { number: 10 })} (${t("zonePage:wireless")})`,
                value: 10,
              },
            ]}
            containerStyle={{ width: "100%", marginBottom: 16 }}
          />
          <div className="section-title">{t("zonePage:zone_type")}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <CustomButton
              text={t("zonePage:fire")}
              style={{ flexBasis: "32%" }}
              outline={zoneType != "fire"}
              onClick={() => setZoneType("fire")}
            />
            <CustomButton
              text={t("zonePage:h24")}
              style={{ flexBasis: "32%" }}
              outline={zoneType != "24h"}
              onClick={() => setZoneType("24h")}
            />
            <CustomButton
              text={t("zonePage:ordinary")}
              style={{ flexBasis: "32%" }}
              outline={zoneType != "ordinary"}
              onClick={() => setZoneType("ordinary")}
            />
          </div>
          <div className="section-title">{t("zonePage:operating_status")}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <CustomButton
              text={t("zonePage:close")}
              style={{ flexBasis: "45%" }}
              outline={operatinStatus}
              onClick={() => setOperatingStatus(false)}
            />
            <CustomButton
              text={t("zonePage:open")}
              style={{ flexBasis: "45%" }}
              outline={!operatinStatus}
              onClick={() => setOperatingStatus(true)}
            />
          </div>
        </div>
      </details>
      <details className="accordion">
        <summary className="title">
          <ZoneIcon />
          <span className="accordion-text">{t("zonePage:zones_status")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>
        <div className="content">
          <CustomDropdown
            value={zoneNumber}
            setValue={setZoneNumber}
            options={[
              { text: t("zonePage:zone_number", { number: 1 }), value: 1 },
              { text: t("zonePage:zone_number", { number: 2 }), value: 2 },
              { text: t("zonePage:zone_number", { number: 3 }), value: 3 },
              { text: t("zonePage:zone_number", { number: 4 }), value: 4 },
              { text: t("zonePage:zone_number", { number: 5 }), value: 5 },
              { text: t("zonePage:zone_number", { number: 6 }), value: 6 },
              { text: t("zonePage:zone_number", { number: 7 }), value: 7 },
              { text: t("zonePage:zone_number", { number: 8 }), value: 8 },
              { text: t("zonePage:zone_number", { number: 9 }), value: 9 },
              { text: t("zonePage:zone_number", { number: 10 }), value: 10 },
            ]}
            containerStyle={{ width: "100%", marginBottom: 16 }}
          />
          <div className="section-title">{t("zonePage:output_type")}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              rowGap: 16,
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <CustomButton
              text={t("zonePage:ding_dong")}
              style={{ flexBasis: "32%" }}
              outline={outputType != "ding_dong"}
              onClick={() => setOutputType("ding_dong")}
            />
            <CustomButton
              text={t("zonePage:speaker")}
              style={{ flexBasis: "32%" }}
              outline={outputType != "speaker"}
              onClick={() => setOutputType("speaker")}
            />
            <CustomButton
              text={t("zonePage:siren")}
              style={{ flexBasis: "32%" }}
              outline={outputType != "siren"}
              onClick={() => setOutputType("siren")}
            />
            <CustomButton
              text={t("zonePage:call")}
              style={{ flexBasis: "32%" }}
              outline={outputType != "call"}
              onClick={() => setOutputType("call")}
            />
            <CustomButton
              text={t("zonePage:sms")}
              style={{ flexBasis: "32%" }}
              outline={outputType != "sms"}
              onClick={() => setOutputType("sms")}
            />
          </div>
        </div>
      </details>
    </div>
  );
};

export default ZonePage;
