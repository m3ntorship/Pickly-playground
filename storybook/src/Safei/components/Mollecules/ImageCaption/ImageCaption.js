import React from "react";

const ImageCaption = ({ letter, source }) => {
  if (!source) source = "Simage.png";
  if (!letter) letter = "A";
  return (
    <div className="image-container rounded-t-md relative w-full">
      <img src={source} alt="" className="w-full" />
      <div className=" text-md font-bold rounded-full w-9 h-9 p-2 absolute top-2 right-5 cursor-pointer">
        <span className="rounded-full">
          <svg
            className="w-9 h-9"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
              fill="white"
            />
            <path
              d="M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z"
              fill="#5B6366"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-row p-1 border border-grey-shd5 rounded-b-md mt-1">
        <span className="bg-grey-shd6 block text-grey text-sm text-center h-6 w-6 rounded-sm py-0.5 px-2 mt-1 mr-2 ml-1">
          {letter.toUpperCase()}
        </span>
        <input
          type="text"
          placeholder="Type caption (optional)"
          className="block p-1 w-auto"
        />
      </div>
    </div>
  );
};

export default ImageCaption;
