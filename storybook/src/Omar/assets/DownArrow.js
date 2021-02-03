import React from "react";

const DownArrow = ({ className, colorFill }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.293 9.293L12 13.586L7.70697 9.293L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
        fill={colorFill}
      />
    </svg>
  );
};

export default DownArrow;
