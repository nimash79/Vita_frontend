import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "./../components/shared/CustomButton";
import SmsIcon from "./../components/icons/SmsIcon";
import ArrowDownIcon from "./../components/icons/ArrowDownIcon";
import CustomDropdown from "../components/shared/CustomDropdown";
import CustomInput from "./../components/shared/CustomInput";
import PhoneIcon from "./../components/icons/PhoneIcon";
import ListIcon from './../components/icons/ListIcon';
import SettingsIcon from "../components/icons/SettingsIcon";
import LanguageIcon from './../components/icons/LanguageIcon';

const ContactsPage = () => {
  const [smsLanguage, setSmsLanguage] = useState("fa");
  const [phoneNumber1, setPhoneNumber1] = useState(1);
  const [phoneNumber2, setPhoneNumber2] = useState(1);
  const [phoneNumbers, setPhoneNumbers] = useState([
    "9309167845",
    "9309167844",
    "9309168745",
    "9309168080",
    "9309169090",
    "9309167845",
    "9309167844",
    "9309168745",
    "9309168080",
    "9309169090",
  ]);
  const { t, i18n } = useTranslation();
  return (
    <div className="contacts">
      <details className="accordion">
        <summary className="title">
          <LanguageIcon />
          <span className="accordion-text">
            {t("contactsPage:sms_language")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content dual-button">
          <CustomButton
            text={t("contactsPage:fa")}
            outline={smsLanguage != "fa"}
            onClick={() => setSmsLanguage("fa")}
          />
          <CustomButton
            text={t("contactsPage:en")}
            outline={smsLanguage != "en"}
            onClick={() => setSmsLanguage("en")}
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <PhoneIcon />
          <span className="accordion-text">{t("contactsPage:phones")}</span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <div className="enter-phones">
            <CustomDropdown
              value={phoneNumber2}
              setValue={setPhoneNumber2}
              options={[
                { text: "1", value: 1 },
                { text: "2", value: 2 },
                { text: "3", value: 3 },
                { text: "4", value: 4 },
                { text: "5", value: 5 },
                { text: "6", value: 6 },
                { text: "7", value: 7 },
                { text: "8", value: 8 },
                { text: "9", value: 9 },
                { text: "10", value: 10 },
              ]}
            />
            <CustomInput
              placeholder={t("contactsPage:phone_placeholder")}
              containerStyle={{ flex: 1, marginInlineStart: 16 }}
              type="number"
            />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <SettingsIcon />
          <span className="accordion-text">
            {t("contactsPage:phones_settings")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          <div className="enter-phones">
            <CustomDropdown
              value={phoneNumber1}
              setValue={setPhoneNumber1}
              options={[
                { text: "1", value: 1 },
                { text: "2", value: 2 },
                { text: "3", value: 3 },
                { text: "4", value: 4 },
                { text: "5", value: 5 },
                { text: "6", value: 6 },
                { text: "7", value: 7 },
                { text: "8", value: 8 },
                { text: "9", value: 9 },
                { text: "10", value: 10 },
              ]}
            />
          </div>
          <CustomButton
            text={t("common:save")}
            className="custom-save-accordion"
          />
        </div>
      </details>

      <details className="accordion">
        <summary className="title">
          <ListIcon />
          <span className="accordion-text">
            {t("contactsPage:phones_list")}
          </span>
          <ArrowDownIcon className="accordion-arrow" />
        </summary>

        <div className="content">
          {phoneNumbers.map((item, index) => (
            <div className="list-item">
              {/* <PhoneIcon /> */}
              <span>{index + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default ContactsPage;
