import React from "react";
import PropTypes from "prop-types";

export default function B(props) {
  const { width, height, path1Fill, path2Fill, className } = props;
  // Width & Height should be added as classnames.
  // Later: add the ability to add either in pixels or as classes
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
        d="M9.29395 17V7.04688H12.5479C13.6279 7.04688 14.4391 7.27018 14.9814 7.7168C15.5283 8.16341 15.8018 8.82422 15.8018 9.69922C15.8018 10.1641 15.6696 10.5765 15.4053 10.9365C15.141 11.292 14.7809 11.5677 14.3252 11.7637C14.863 11.9141 15.2868 12.2012 15.5967 12.625C15.9111 13.0443 16.0684 13.5456 16.0684 14.1289C16.0684 15.0221 15.779 15.724 15.2002 16.2344C14.6214 16.7448 13.8034 17 12.7461 17H9.29395ZM10.6064 12.3447V15.9268H12.7734C13.3841 15.9268 13.8649 15.7695 14.2158 15.4551C14.5713 15.1361 14.749 14.6986 14.749 14.1426C14.749 12.944 14.0973 12.3447 12.7939 12.3447H10.6064ZM10.6064 11.292H12.5889C13.1631 11.292 13.6211 11.1484 13.9629 10.8613C14.3092 10.5742 14.4824 10.1846 14.4824 9.69238C14.4824 9.14551 14.3229 8.74902 14.0039 8.50293C13.6849 8.25228 13.1995 8.12695 12.5479 8.12695H10.6064V11.292Z"
        fill={path2Fill || `#5B6366`}
      />
    </svg>
  );
}

B.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
