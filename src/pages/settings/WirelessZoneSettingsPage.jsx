import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";
import CustomRadio from "../../components/shared/CustomRadio";
import { useTranslation } from "react-i18next";

const WirelessZoneSettingsPage = () => {
  const [check1, setCheck1] = useState(false);
  const [nc, setNc] = useState(1);

  const {t} = useTranslation();

  useEffect(() => {
    console.log(nc);
  }, [nc])

  const navigate = useNavigate();
  return (
    <div className="zone-settings">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">{t("wirelessZoneSettingsPage:title")}</p>
        <div></div>
      </div>
      <div className="custom-table-header">{t("wirelessZoneSettingsPage:zone")}</div>
      <table className="custom-table with-header">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"> {t("wirelessZoneSettingsPage:no")} </th>
            <th scope="col"> {t("wirelessZoneSettingsPage:nc")} </th>
            <th scope="col">{t("wirelessZoneSettingsPage:moment")}</th>
            <th scope="col">{t("wirelessZoneSettingsPage:delay")}</th>
            <th scope="col">{t("wirelessZoneSettingsPage:ding_dong")}</th>
            <th scope="col">{t("wirelessZoneSettingsPage:h24")}</th>
            <th scope="col">{t("wirelessZoneSettingsPage:fire")}</th>
            <th scope="col">{t("wirelessZoneSettingsPage:pedal")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{t("wirelessZoneSettingsPage:zone_number", {number: 1})}</th>
            <td>
              <CustomRadio name={"nc"} value={1} onChange={() => setNc(1)} />
            </td>
            <td>
              <CustomRadio name={"nc"} value={2} onChange={() => setNc(2)} />
            </td>
            <td>
              <CustomRadio name={"nc"} value={3} onChange={() => setNc(3)} />
            </td>
            <td>
              <CustomRadio name={"nc"} value={4} onChange={() => setNc(4)} />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>{t("wirelessZoneSettingsPage:zone_number", {number: 2})}</th>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>{t("wirelessZoneSettingsPage:zone_number", {number: 3})}</th>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>{t("wirelessZoneSettingsPage:zone_number", {number: 4})}</th>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
                <CustomRadio />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button">
        <CustomButton text={t("common:confirm")} />
      </div>
    </div>
  );
};

export default WirelessZoneSettingsPage;
