import React from "react";
import CorrectIcon from "../icons/Correct";
import WrongIcon from "../icons/Wrong";
import HomeIcon from "../icons/Home";

function InputtextLIcon({ status, placeholder }) {
  let statusDesign = "";
  let icon = "";
  switch (status) {
    case "normal": {
      statusDesign = "border-dark border border-opacity-25";
      icon = "";
      break;
    }
    case "error": {
      statusDesign = "border-error border";
      icon = <WrongIcon />;
      break;
    }
    case "success": {
      statusDesign = "border-success border";
      icon = <CorrectIcon />;
      break;
    }
    default: {
      statusDesign = "border-dark border border-opacity-25";
      break;
    }
  }
  return (
    <div
      className={`${statusDesign} rounded-md  w-72 h-10 flex  items-center justify-center px-1 hover:border-grey-shd1 focus-within:border-opacity-100 bg-white label-container`}
    >
      {<HomeIcon />}
      <input
        w-80
        h-10
        placeholder={placeholder}
        style={{ width: "100%" }}
        className="px-3 py-1 outline-none"
        type="text"
      />
      {icon}
    </div>
  );
}

export default InputtextLIcon;
