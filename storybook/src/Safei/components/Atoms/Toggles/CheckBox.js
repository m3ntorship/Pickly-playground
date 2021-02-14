import React, { useState } from "react";

const CheckBox = (props) => {
  const [hideIcon, setHideIcon] = useState(true);

  const [displayIcon, setDisplayIcon] = useState({
    icon: "hidden",
    bg: "bg-white",
  });
  let disablCheck = props.disabled ? "none" : "";
  let opa = props.disabled ? "25" : "";
  const handleClick = () => {
    console.log(hideIcon);
    setHideIcon(!hideIcon);
    if (hideIcon) {
      setDisplayIcon({
        icon: "",
        bg: "bg-primary",
      });
    } else {
      setDisplayIcon({
        icon: "hidden",
        bg: "bg-white",
      });
    }
  };
  let size = "1";
  if (props.size === "sm") {
    size = "0.666";
  } else {
    size = "1";
  }

  return (
    <div
      style={{
        pointerEvents: `${disablCheck}`,
        transform: `scale(${size})`,
      }}
      className={`border-2 border-grey-shd4 w-6 h-6  ${displayIcon.bg} relative cursor-pointer rounded-sm hover:border-grey-shd1 opacity-${opa}`}
      id="box"
      onClick={handleClick}
    >
      <svg
        className={`mt-1.5 ml-1 ${displayIcon.icon}`}
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.66632 6.39073L1.47099 4.19539L0.52832 5.13806L3.66632 8.27606L10.1377 1.80473L9.19499 0.862061L3.66632 6.39073Z"
          fill="white"
        />
      </svg>

      <input
        type="checkbox"
        className="h-5 w-5 opacity-0"
        disabled={props.disabled}
      />
    </div>
  );
};
export default CheckBox;
