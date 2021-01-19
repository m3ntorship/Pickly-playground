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
      <div className=" text-md font-bold rounded-full w-9 h-9 p-2 top-60  left-90    mx-60 my-1 absolute cursor-pointer">
        <span className="rounded-full">
          <svg
            className="w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
              fill="white"
            ></path>
            <path
              d="M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z"
              fill="#5B6366"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

Man.propTypes = {
  type: PropTypes.oneOf(["Man1", "Man2", "Man3", "Man4"]),
};
