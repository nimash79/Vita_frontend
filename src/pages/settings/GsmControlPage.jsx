import CustomCheckbox from "./../../components/shared/CustomCheckbox";
import ArrowBackIcon from "./../../components/icons/ArrowBackIcon";
import { useState } from "react";
import CustomButton from "./../../components/shared/CustomButton";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
const GsmControlPage = () => {
  const [check1, setCheck1] = useState(false);

  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="gsm-control">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">{t("gsmControlPage:title")}</p>
        <div></div>
      </div>
      <div style={{ maxWidth: "100%", overflow: "auto" }}>
        <table className="custom-table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                {t("gsmControlPage:zone_number", { number: 1 })}
              </th>
              <th scope="col">
                {t("gsmControlPage:zone_number", { number: 2 })}
              </th>
              <th scope="col">
                {t("gsmControlPage:zone_number", { number: 3 })}
              </th>
              <th scope="col">
                {t("gsmControlPage:zone_number", { number: 4 })}
              </th>
              <th scope="col">
                {t("gsmControlPage:zone_number", { number: 5 })}
              </th>
              <th scope="col">
                {t("gsmControlPage:zone_number", { number: 6 })}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <CustomCheckbox
                  checked={check1}
                  onChange={() => setCheck1((c) => !c)}
                />
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
              <th>2</th>
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
              <th>3</th>
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
              <th>4</th>
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
              <th>5</th>
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
      </div>
      <div className="button">
        <CustomButton text={t("common:confirm")} />
      </div>
    </div>
  );
};

export default GsmControlPage;
