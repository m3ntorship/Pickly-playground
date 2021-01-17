import React from "react";
import PostOptions from "../PostOptions/PostOptions";
import Button from "../../Atoms/Buttons/Button";

const PostingBar = ({ disabled }) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div>
        <PostOptions />
      </div>
      <div>
        <Button disabled={disabled} />
      </div>
    </div>
  );
};

export default PostingBar;
