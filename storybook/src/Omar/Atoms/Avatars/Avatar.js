import React from "react";
export const AVATAR_OPTIONS = {
  SIZE: {
    SMALL: "sm",
    MEDIUM: "md",
    BIG: "lg",
  },
};

export const Avatar = ({ anonymous, size }) => {
  return (
    <img
      src={anonymous ? "./anonymous.svg" : "https://source.unsplash.com/random"}
      alt="Profile Picture"
      className={`rounded-full object-cover mr-5 ${
        size === AVATAR_OPTIONS.SIZE.BIG
          ? "w-14 h-14"
          : size === AVATAR_OPTIONS.SIZE.MEDIUM
          ? "w-10 h-10"
          : "w-8 h-8"
      }`}
    />
  );
};
