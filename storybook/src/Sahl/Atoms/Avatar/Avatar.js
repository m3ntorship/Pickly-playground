import React from "react";
import PropTypes from "prop-types";

export default function Avatar(props) {
  const { size = "medium", type = "default", src, className } = props;
  let avatarPhoto;
  let imageSize = "w-10 h-10";

  // Change size
  switch (size) {
    case "small":
      imageSize = "w-6 h-6";
      break;
    case "large":
      imageSize = "w-14 h-14";
      break;
    default:
      break;
  }
  // Set the children
  switch (type) {
    case "default":
      avatarPhoto = (
        <svg
          className={`${imageSize} rounded-full bg-primary-200`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M418.88 344.021l-54.869-19.093a10.665 10.665 0 00-11.349 2.859 131.586 131.586 0 01-96.661 45.547 131.583 131.583 0 01-96.64-45.525 10.666 10.666 0 00-11.349-2.859l-54.869 19.093C37.383 363.423.006 415.978 0 475.008v15.659c0 5.891 4.776 10.667 10.667 10.667h490.667c5.891 0 10.667-4.776 10.667-10.667v-15.659c.005-59.032-37.364-111.597-93.121-130.987z"
            fill="#2196f3"
          />
          <path
            d="M384 141.44v-2.773c0-70.692-57.308-128-128-128s-128 57.308-128 128v2.773A56.914 56.914 0 00106.667 192c0 29.675 13.099 52.224 30.699 53.333C156.715 309.589 203.499 352 256 352s99.264-42.453 118.635-106.667c17.6-1.109 30.699-23.659 30.699-53.333A56.917 56.917 0 00384 141.44z"
            fill="#ffe082"
          />
          <g fill="#f44336">
            <path d="M245.333 223.808a10.453 10.453 0 01-10.453-8.853 46.04 46.04 0 0126.304-42.667 32.47 32.47 0 0016.149-33.621c1.027-10.755-6.86-20.307-17.615-21.333a19.569 19.569 0 00-3.718 0c-10.755-1.027-20.307 6.86-21.333 17.615a19.569 19.569 0 000 3.718c0 5.891-4.776 10.667-10.667 10.667s-10.667-4.776-10.667-10.667C212.284 116.152 229.684 97.05 252.199 96A40.835 40.835 0 01256 96c22.515-1.049 41.617 16.351 42.667 38.866a40.835 40.835 0 010 3.801 53.164 53.164 0 01-26.432 51.776c-17.067 10.389-16.363 21.163-16.32 21.611a10.816 10.816 0 01-9.344 11.669c-.411.051-.824.08-1.238.085z" />
            <circle cx="245.333" cy="256" r="10.667" />
          </g>
        </svg>
      );
      break;
    case "anonymous":
      avatarPhoto = (
        <svg
          className={`${imageSize} rounded-full`}
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 600 600"
        >
          <defs />
          <defs>
            <clipPath id="b">
              <circle cx="300" cy="300" r="280" />
            </clipPath>
            <clipPath id="a">
              <rect width="100%" height="498" />
            </clipPath>
          </defs>
          <circle cx="300" cy="300" r="280" fill="#a1a1F1" clipPath="url(#a)" />
          <circle cx="300" cy="230" r="115" />
          <circle cx="300" cy="550" r="205" clipPath="url(#b)" />
        </svg>
      );
      break;
    case "personal":
      avatarPhoto = (
        <img
          className={`${imageSize} rounded-full object-cover block`}
          src={src}
          alt="Profile Pic"
        />
      );
      break;

    default:
      break;
  }

  return (
    <div className={`${imageSize} rounded-full ${className}`}>
      {avatarPhoto}
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["personal", "anonymous", "default"]),
  src: PropTypes.string,
};
