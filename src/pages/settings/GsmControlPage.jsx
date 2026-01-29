import CustomCheckbox from "./../../components/shared/CustomCheckbox";
import ArrowBackIcon from "./../../components/icons/ArrowBackIcon";
import { useState } from "react";
import CustomButton from './../../components/shared/CustomButton';
import { useNavigate } from "react-router";
const GsmControlPage = () => {
  const [check1, setCheck1] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="gsm-control">
      <div className="header">
        <div className="icon" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </div>
        <p className="header-title">GSM NUMBER CONTROL</p>
        <div></div>
      </div>
      <div style={{maxWidth: "100%", overflow: "auto"}}>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>N1</th>
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
          </tr>
          <tr>
            <th>N2</th>
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
            <th>N3</th>
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
            <th>N4</th>
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
            <th>N5</th>
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
        <CustomButton text="Confirm" />
      </div>
    </div>
  );
};

export default GsmControlPage;
