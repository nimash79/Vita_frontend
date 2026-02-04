import { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const CustomDropdown = ({
  options = [],
  value,
  setValue,
  placeholder = "",
  containerStyle = {},
}) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      )
        setToggle(false);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="custom-dropdown"
      data-sound-click
      onClick={() => setToggle((t) => !t)}
      style={containerStyle}
    >
      <div className="custom-dropdown-button">
        <span>{value ? options.find(op => op.value === value)?.text : placeholder}</span>
        <ArrowDownIcon color="#404040" />
      </div>
      {toggle && (
        <div className="options-container">
          <div className="options">
            {options.map((option) => (
              <div key={option.value} onClick={() => setValue(option.value)}>
                {option.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
