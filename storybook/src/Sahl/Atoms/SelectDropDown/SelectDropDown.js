import React from "react";
import PropTypes from "prop-types";
import ArrowDown from '../../../assets/icons/DownArrow'

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
      <div className={`flex items-center`}>
        <select
          id={label}
          className={`relative z-10 appearance-none border-none bg-transparent pr-4 m-0 w-full font-sans text-body-small capitalize cursor-pointer outline-none`}
        >
          {options.map((option, i) => (
            <option value={option} key={option + i}>
              {option}
            </option>
          ))}
        </select>
        <ArrowDown width='w-4' height='h-4' className=' cursor-pointer -ml-3.5'/>
      </div>
    </div>
  );
}

SelectDropDown.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  label: PropTypes.string
};

export default SelectDropDown;
