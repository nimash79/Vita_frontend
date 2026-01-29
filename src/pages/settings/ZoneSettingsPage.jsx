import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackIcon from "../../components/icons/ArrowBackIcon";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
import CustomButton from "../../components/shared/CustomButton";

const ZoneSettingsPage = () => {
  const [check1, setCheck1] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="zone-settings">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">ZONE SETTINGS</p>
        <div></div>
      </div>
      <div className="custom-table-header">WIRED ZONE</div>
      <table className="custom-table with-header">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">SIREN</th>
            <th scope="col">ALARM</th>
            <th scope="col">DING DONG</th>
            <th scope="col">SMS</th>
            <th scope="col">TCALL</th>
            <th scope="col">GCALL</th>
            <th scope="col">NOT USE</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>2</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>3</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>4</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="custom-table-header">WIRELESS ZONE</div>
      <table className="custom-table with-header">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">SIREN</th>
            <th scope="col">ALARM</th>
            <th scope="col">DING DONG</th>
            <th scope="col">SMS</th>
            <th scope="col">TCALL</th>
            <th scope="col">GCALL</th>
            <th scope="col">NOT USE</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>2</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>3</th>
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
            <td>
              <CustomCheckbox />
            </td>
          </tr>
          <tr>
            <th>4</th>
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

export default ZoneSettingsPage;
