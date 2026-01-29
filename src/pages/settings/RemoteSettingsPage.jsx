import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";

const RemoteSettingsPage = () => {
  const [check1, setCheck1] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="remote-settings">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">REMOTE SETTINGS</p>
        <div></div>
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Z1</th>
            <th scope="col">Z2</th>
            <th scope="col">Z3</th>
            <th scope="col">Z4</th>
            <th scope="col">Z5</th>
            <th scope="col">Z6</th>
            <th scope="col">Z7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>R0</th>
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
            <th>R1</th>
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
            <th>R2</th>
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
            <th>R3</th>
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
            <th>R4</th>
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
            <th>R5</th>
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
            <th>R6</th>
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
            <th>R7</th>
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
            <th>R8</th>
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
            <th>R9</th>
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
            <th>R10</th>
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
        <CustomButton text="Confirm" />
      </div>
    </div>
  );
}

export default RemoteSettingsPage