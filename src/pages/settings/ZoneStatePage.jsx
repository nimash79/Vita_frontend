import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomSwitch from "./../../components/shared/CustomSwitch";
import { useTranslation } from "react-i18next";

const ZoneStatePage = () => {
  const [check1, setCheck1] = useState(false);

  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="zone-state">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">{t("zoneStatePage:title")}</p>
        <div></div>
      </div>
      <table className="zone-state-table">
        <thead>
          <tr>
            <th>{t("zoneStatePage:zone")}</th>
            <td></td>
            <th>{t("zoneStatePage:state")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 1 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={true} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 2 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 3 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 4 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 5 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={true} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 6 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 7 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 8 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 9 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
          <tr>
            <td>{t("zoneStatePage:zone_number", { number: 10 })}</td>
            <td></td>
            <td>
              <CustomSwitch checked={false} />
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="button">
        <CustomButton text="Confirm" />
      </div> */}
    </div>
  );
};

export default ZoneStatePage;
