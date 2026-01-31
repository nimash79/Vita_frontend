import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";
import { useTranslation } from "react-i18next";

const RemoteSettingsPage = () => {
  const [check1, setCheck1] = useState(false);

  const {t} = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="remote-settings">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">{t("remoteSettingsPage:title")}</p>
        <div></div>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 1})}</th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 2})}</th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 3})}</th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 4})}</th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 5})}</th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 6})}</th>
            <th scope="col">{t("remoteSettingsPage:zone_number", {number: 7})}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{t("remoteSettingsPage:remote_number", {number: 0})}</th>
            <td>
              <CustomCheckbox checked={check1} onChange={() => setCheck1(c => !c)} />
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
            <td>
              <CustomCheckbox />
            </td>
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>{t("remoteSettingsPage:remote_number", {number: 1})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 2})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 3})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 4})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 5})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 6})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 7})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 8})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 9})}</th>
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
            <th>{t("remoteSettingsPage:remote_number", {number: 10})}</th>
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
}

export default RemoteSettingsPage