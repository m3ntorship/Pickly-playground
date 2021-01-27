import React from "react";
import CorrectIcon from "../icons/Correct";
import WrongIcon from "../icons/Wrong";
import ArrowDown from "../icons/ArrowDown";

const LabelInput = ({ status, placeholder }) => {
  let statusStyle, iconDisplay;
  if (status === "error") {
    statusStyle = "border-error border";
    iconDisplay = <WrongIcon />;
  } else if (status === "success") {
    statusStyle = "border-success border";
    iconDisplay = <CorrectIcon />;
  } else {
    statusStyle = "border-dark border border-opacity-25";
    iconDisplay = "";
  }
  return (
    <>
      <div
        className={`${statusStyle} rounded-md  w-64 flex flex-row items-start content-center px-1 hover:border-grey-shd1 focus-within:border-opacity-100 bg-white label-container`}
      >
        {/* Enter Text */}
        <input
          placeholder={placeholder}
          style={{ width: "100%" }}
          className="px-3 py-1 outline-none"
          type="search"
        ></input>
        <div className="pt-2 pr-1 ">{iconDisplay}</div>
        <div className="pr-1 pt-2 cursor-pointer">
          <ArrowDown />
        </div>
      </div>
    </>
  );
};
export default LabelInput;
