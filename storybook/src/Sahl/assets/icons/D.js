import React from "react";
import PropTypes from "prop-types";

export default function D(props) {
  const { width, height, path1Fill, path2Fill, className } = props;
  return (
    <svg
      className={`${width || "w-6"} ${height || "h-6"} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
        fill={path1Fill || `#FFFFFF`}
      />
      <path
        d="M8.56152 17V7.04688H11.3711C12.237 7.04688 13.0026 7.23828 13.668 7.62109C14.3333 8.00391 14.846 8.5485 15.2061 9.25488C15.5706 9.96126 15.7552 10.7725 15.7598 11.6885V12.3242C15.7598 13.263 15.5775 14.0856 15.2129 14.792C14.8529 15.4984 14.3356 16.0407 13.6611 16.4189C12.9912 16.7972 12.2096 16.9909 11.3164 17H8.56152ZM9.87402 8.12695V15.9268H11.2549C12.2666 15.9268 13.0527 15.6123 13.6133 14.9834C14.1784 14.3545 14.4609 13.459 14.4609 12.2969V11.7158C14.4609 10.5856 14.1943 9.70833 13.6611 9.08398C13.1325 8.45508 12.3805 8.13607 11.4053 8.12695H9.87402Z"
        fill={path2Fill || `#5B6366`}
      />
    </svg>
  );
}

D.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
