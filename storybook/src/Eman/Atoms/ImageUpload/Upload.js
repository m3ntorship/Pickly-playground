import React from "react";
import AddImage from "./../../assets/icons/UploadImage/AddImage";

export const Upload = () => {
  return (
    <>
      <div className="relative flex justify-center items-center border-2 border-dashed border-accent bg-grey-shd7 rounded-md text-accent focus:outline-none h-14">
        <div className="flex items-center">
          <AddImage className="mr-1 w-4 h-4 fill-current inline" />
          <p className="pl-xxs text-accent font-medium font-sm">
            Upload one or multiple images
          </p>
        </div>
        <input
          type="file"
          id="myFile"
          name="filename"
          multiple
          className="absolute top-0 bottom-0 right-0 left-0 opacity-0 min-w-full h-full cursor-pointer"
        />
      </div>
    </>
  );
};
