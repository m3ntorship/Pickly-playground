import React from "react";
import Avatar from "../../Atoms/Avatar/Avatar";
const PostView = ({ single }) => {
  if (single)
    return (
      <div className="flex flex-col flex-nowrap	justify-center	items-center	border-2 border-white shadow-dark w-full m-auto px-m py-xs">
        <div className="flex flex-row border  border-primary-shd6 w-full px-xs">
          <div>
            <Avatar type={"user"} size={"md"} />
          </div>
          <div>Name and time</div>

          <div className="ml-auto border-2 border-error">Buttsson</div>
        </div>
        <div>
          Content to be 3 divs top with text, mid with photo and overlay with
          icons and caption
        </div>
        <div>Footer</div>
      </div>
    );
  else {
    return <div>many</div>;
  }
};

export default PostView;
