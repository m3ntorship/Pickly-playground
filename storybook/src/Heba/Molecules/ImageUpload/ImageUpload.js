import React from "react";

export const ImageUpload = () => {
  return (
    <div className=" flex items-center justify-center -mx-2 w-37xl  h-14   bg-grey-shd7 border-dashed border rounded-md rounded-br-md m-m border-accent box-border order-2 ">
      <svg
        className="mr-1 w-4 h-4 fill-current"
        viewBox="0 0 24 24"
        fill="#00A8E8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z"
          fill="#00A8E8"
        ></path>
        <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="#00A8E8"></path>
        <path
          d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z"
          fill="#00A8E8"
        ></path>
      </svg>
      <div className="relative ">
        <input
          multiple="multiple"
          type="file"
          className="w-48  absolute h-5 left-5 top-0   order-2 opacity-0  "
        />
        <label className="  font-sans text-center flex items-center text-accent  font-normal-500 text-sm z-10">
          {" "}
          Upload one or multiple images
        </label>
      </div>
    </div>
  );
};
