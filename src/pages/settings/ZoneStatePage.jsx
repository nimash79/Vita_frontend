import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";
import CustomSwitch from './../../components/shared/CustomSwitch';

const ZoneStatePage = () => {
  const [check1, setCheck1] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="zone-state">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">ZONE STATE</p>
        <div></div>
      </div>
      <table className="zone-state-table">
        <thead>
            <tr>
                <th>ZONE</th>
                <td></td>
                <th>STATE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>ZONE 1</td>
                <td></td>
                <td>
                    <CustomSwitch checked={true} />
                </td>
            </tr>
            <tr>
                <td>ZONE 2</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 3</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 4</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 5</td>
                <td></td>
                <td>
                    <CustomSwitch checked={true} />
                </td>
            </tr>
            <tr>
                <td>ZONE 6</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 7</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 8</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 9</td>
                <td></td>
                <td>
                    <CustomSwitch checked={false} />
                </td>
            </tr>
            <tr>
                <td>ZONE 10</td>
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