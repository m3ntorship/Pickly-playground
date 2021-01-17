import React from "react";
import PropTypes from "prop-types";
// import ArrowDown from "../../assets/icons/DownArrow";

function SelectDropDown(props) {
  const { className, options, label } = props;
  return (
    <div className={`${className} flex items-center`}>
      <label
        htmlFor={label}
        className={`text-body-small text-dark-grey capitalize ${
          label ? "inline-block mr-2" : "hidden"
        }`}
      >
        {label}:
      </label>
      <select
        id={label}
        className={`appearance-none bg-white w-full m-0 font-sans text-grey text-sm capitalize cursor-pointer outline-none`}
      >
        {options.map((option, i) => (
          <option value={option} key={option + i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectDropDown.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default SelectDropDown;
