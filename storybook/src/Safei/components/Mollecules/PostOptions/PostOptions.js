import React from "react";
import Toggle from "../../Atoms/Toggles/Toggle";

const PostOptions = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="mt-0 pb-2">
        <Toggle size="sm" />
      </div>
      <div
        className="text-xs ml-2 leading-4 mb-0 pr-6 "
        style={{ paddingTop: "3px" }}
      >
        Hide My Identity
      </div>
      <div className="text-xs ml-2 leading-4 mb-0 pr-6 cursor-pointer">
        <label htmlFor="privacy" className="font-normal text-xs text-dark-grey">
          Privacy:
        </label>
        <select
          name="privacy"
          id="privacy"
          className="cursor-pointer text-center ml-2 font-medium outline-none text-sm text-dark-grey"
        >
          <option value="Public">Public</option>
          <option value="Custom">Custom</option>
          <option value="Private">Private</option>
        </select>
      </div>
    </div>
  );
};

export default PostOptions;
