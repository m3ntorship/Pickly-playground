import React from "react";
import PropTypes from "prop-types";
import Anonymous from "./../../assets/icons/Avatar/Anonymous";
import NotFilled from "./../../assets/icons/Avatar/NotFilled";
import img1 from "./../../assets/imgs/img.jfif";
import img2 from "./../../assets/imgs/img2.jfif";
import img3 from "./../../assets/imgs/img3.jpg";

export const AVATER = {
  SIZE: {
    LARGE: "Large",
    MEDIUM: "Medium",
    SMALL: "Small",
  },
  TYPE: {
    FILLED: "Filled",
    ANONYMOUS: "Anonymous",
    NOTFILLED: "Not Filled",
  },
};

export const Avater = ({ type, size, imgName }) => {
  const bgStyle =
    type === AVATER.TYPE.ANONYMOUS ? "bg-warning-shd7" : "bg-grey-shd6";
  const divSizeStyle =
    size === "Large"
      ? "w-14 h-14"
      : size === "Medium"
      ? "w-10 h-10"
      : "w-8 h-8";

  const svgSizeStyle =
    size === AVATER.SIZE.LARGE
      ? "32"
      : size === AVATER.SIZE.MEDIUM
      ? "24"
      : "16";

  return (
    <>
      <div
        className={`flex justify-center items-center rounded-full mr-4 ${divSizeStyle} ${bgStyle}`}
      >
        {type === AVATER.TYPE.FILLED && (
          <img
            className="rounded-full w-full h-full"
            src={
              imgName === "" ? img1 : `static/media/${imgName}` || img2 || img3
            } /*** At storybook imgName should be img2.e3c2ff2f.jfif or img3.c3bd2696.jpg or img.dd659847.jfif  ***/
            alt="Avater"
          />
        )}
        {type === AVATER.TYPE.ANONYMOUS && (
          <Anonymous width={svgSizeStyle} height={svgSizeStyle} />
        )}
        {type === AVATER.TYPE.NOTFILLED && (
          <NotFilled width={svgSizeStyle} height={svgSizeStyle} />
        )}
      </div>
    </>
  );
};

Avater.propTypes = {
  size: PropTypes.oneOf(["Large", "Medium", "Small"]),
  type: PropTypes.oneOf(["Filled", "Anonymous", "Not Filled"]),
  imgName: PropTypes.string,
};
