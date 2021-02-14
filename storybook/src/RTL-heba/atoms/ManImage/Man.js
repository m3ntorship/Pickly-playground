import React from "react";
import PropTypes from "prop-types";
import Man1 from "../../images/image-41.png";
import Man2 from "../../images/image-42.png";
import Man3 from "../../images/image-43.png";
import Man4 from "../../images/image-44.png";

export const MAN_OPTION = {
  TYPE: {
    Man1: "Man1",
    Man2: "Man2",
    Man3: "Man3",
    Man4: "Man4",
  },
};

export const Man = ({ type }) => {
  return (
    <>
      {type === MAN_OPTION.TYPE.Man1 && (
        <img className="mb-1" src={Man1} alt="Man1" />
      )}
      {type === MAN_OPTION.TYPE.Man2 && (
        <img className="mb-1" src={Man2} alt="Man2" />
      )}
      {type === MAN_OPTION.TYPE.Man3 && (
        <img className="mb-1" src={Man3} alt="Man3" />
      )}
      {type === MAN_OPTION.TYPE.Man4 && (
        <img className="mb-1" src={Man4} alt="Man4" />
      )}
    </>
  );
};

Man.propTypes = {
  type: PropTypes.oneOf(["Man1", "Man2", "Man3", "Man4"]),
};
