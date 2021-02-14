import React from "react";
import CorrectIcon from "../icons/Correct";
import ErrorIcon from "../icons/ErrorIcon";

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
      icon = <ErrorIcon />;
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
      <svg
        className=" ml-2"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.9998 8.66663H2.66647V9.99996V13.3333C2.66647 14.0686 3.26447 14.6666 3.9998 14.6666H5.9998H9.9998H11.9998C12.7351 14.6666 13.3331 14.0686 13.3331 13.3333V9.99996V8.66663H13.9998C14.2691 8.66663 14.5131 8.50396 14.6158 8.2553C14.7191 8.00596 14.6618 7.7193 14.4711 7.52863L8.47113 1.52863C8.21047 1.26796 7.78913 1.26796 7.52847 1.52863L1.52847 7.52863C1.3378 7.7193 1.28047 8.00596 1.3838 8.2553C1.48647 8.50396 1.73047 8.66663 1.9998 8.66663ZM6.66647 13.3333V9.99996H9.33313V13.3333H6.66647ZM7.9998 2.94263L11.9998 6.94263V9.99996L12.0005 13.3333H10.6665V9.99996C10.6665 9.26463 10.0685 8.66663 9.33313 8.66663H6.66647C5.93113 8.66663 5.33313 9.26463 5.33313 9.99996V13.3333H3.9998V9.99996V7.99996V6.94263L7.9998 2.94263Z"
          fill="#94ACB5"
        />
      </svg>
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
