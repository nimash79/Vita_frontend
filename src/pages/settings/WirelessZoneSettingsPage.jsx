import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";
import CustomRadio from "../../components/shared/CustomRadio";

const WirelessZoneSettingsPage = () => {
  const [check1, setCheck1] = useState(false);
  const [nc, setNc] = useState(1);

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
        <p className="header-title">WIRELESS ZONE SETTINGS</p>
        <div></div>
      </div>
      <div className="custom-table-header">ZONE</div>
      <table className="custom-table with-header">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"> NO </th>
            <th scope="col"> NC </th>
            <th scope="col">MOMENT</th>
            <th scope="col">DELAY</th>
            <th scope="col">DING DONG</th>
            <th scope="col">24H</th>
            <th scope="col">FIRE</th>
            <th scope="col">PEDAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Z1</th>
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
            <th>Z2</th>
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
            <th>Z3</th>
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
            <th>Z4</th>
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
        <CustomButton text="Confirm" />
      </div>
    </div>
  );
};

export default WirelessZoneSettingsPage;
