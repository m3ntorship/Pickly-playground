import React from "react";
import "./toggle.css";

const Toggle = (props) => {
  let size = "1";
  if (props.size === "sm") {
    size = "0.666";
  } else {
    size = "1";
  }

  return (
    <div style={{ transform: `scale(${size})` }}>
      <label className="switch">
        <input type="checkbox" disabled={props.disabled} checked={props.on} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
export default Toggle;
