import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckIcon from "../../assets/icons/Check";

export default function CheckBox(props) {
  const { size = "default", disabled = false } = props;
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div
      className={`relative flex justify-center items-center ${
        size === "default" ? "w-6 h-6 rounded-sm" : "w-4 h-4 rounded-sm"
      } border border-grey-shd4 hover:border-grey-shd1 ${
        checked && "bg-primary hover:bg-primary-shd8"
      } ${disabled && "opacity-30"} focus:outline-none focus:border-2`}
    >
      <input
        disabled={disabled}
        type="checkbox"
        onChange={onChange}
        className="absolute opacity-0 cursor-pointer w-full h-full"
      />
      {checked && (
        <CheckIcon
          width={size === "default" ? "w-4" : "w-3"}
          height={size === "default" ? "h-4" : "h-3"}
          color="#FFF"
        />
      )}
    </div>
  );
}

CheckBox.propTypes = {
  size: PropTypes.oneOf(["default", "small"]),
  disabled: PropTypes.bool,
};
