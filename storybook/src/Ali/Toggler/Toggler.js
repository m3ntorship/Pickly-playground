import React from "react";
import { useState } from "react";

const TogglerButton = () => {
  const [toggler, settoggler] = useState(false);
  const togglerClicked = () => {
    if (!toggler) {
      settoggler(true);
    } else {
      settoggler(false);
    }
  };
  return (
    <button
      className={`p-xxs w-7 rounded-full transition-colors duration-100 focus:ring-2 focus:outline-none ${
        toggler
          ? " bg-grey-shd4 focus:ring-grey-shd3 hover:bg-grey-shd3"
          : " bg-primary-shd7 focus:ring-primary-shd5 hover:bg-primary-shd6 "
      } `}
      onClick={togglerClicked}
    >
      <div
        className={`w-3 h-3  rounded-full transform  transition-all duration-100 ${
          !toggler && "translate-x-2"
        } 
        ${toggler ? "bg-white" : "bg-primary r"}`}
      >
        {" "}
      </div>
    </button>
  );
};

export default TogglerButton;
