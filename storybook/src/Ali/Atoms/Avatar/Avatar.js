import React from "react";
import PropTypes from "prop-types";

const Avatar = (props) => {
  const { Avatarsize, Userstatus } = props;

  return (
    <div
      className={`${
        Avatarsize === "Small"
          ? "w-8 h-8"
          : Avatarsize === "Medium"
          ? "w-10 h-10"
          : "w-14 h-14"
      } `}
    >
      <img
        className="rounded-full object-contain"
        src={`${
          Userstatus === "Filled"
            ? "/avatar.png"
            : Userstatus === "Anonymous"
            ? "/anon.svg"
            : "/default.svg"
        }`}
        alt=""
      />
    </div>
  );
};

Avatar.propTypes = {
  Avatarsize: PropTypes.oneOf(["Small", "Medium", "Large"]),
  Userstatus: PropTypes.oneOf(["Anonymous", "Filled", "Not filled"]),
};
export default Avatar;
