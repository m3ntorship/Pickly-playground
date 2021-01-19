import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const CircleProgress = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const {
    size = 72,
    progress,
    strokeWidth = 7,
    backgroundColor = "#fff",
    circleColor = "#7048E8",
  } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    // circleRef.current.style = "transition: stroke-dashoffset 850ms ease-in-out";.transition
    if (circleRef.current) {
      circleRef.current.style.transition =
        "stroke-dashoffset 850ms ease-in-out";
      circleRef.current.style.fill = `${backgroundColor}`;
    }
  }, [setOffset, progress, circumference, offset, backgroundColor]);

  return (
    <div className="relative inline-block">
      <svg className={`inline-block `} width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="none"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={4}
        />
        {/* Outline Circle */}
        <circle
          ref={circleRef}
          stroke={circleColor}
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="inline-block w-min absolute left-1/2 top-2/3 transform -translate-x-2/4 -translate-y-2/3 text-dark text-sm">
        {progress}%
      </span>
    </div>
  );
};
// left-0 right-0 mx-auto
CircleProgress.propTypes = {
  size: PropTypes.number,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  circleColor: PropTypes.string,
};

export default CircleProgress;
