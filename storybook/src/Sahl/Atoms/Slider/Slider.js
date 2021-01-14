import React from "react";
import PropTypes from "prop-types";

export default function Slider({ progress }) {
  let completeClass = progress < 100 ? "primary" : "success";
  return (
    <div
      className={`bg-${completeClass} h-1 rounded-full`}
      style={{ width: `${progress}%` }}
    ></div>
  );
}

Slider.propTypes = {
  progress: PropTypes.number.isRequired,
};
