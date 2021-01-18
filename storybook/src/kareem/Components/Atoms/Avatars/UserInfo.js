import React from "react";

function UserInfo({ Name, Hours }) {
  return (
    <div className="flex-col ml-4">
      <span className="h-5 w-48 font-sans text-sm text-black font-bold block">
        {Name}
      </span>
      <span className="h-5 w-28 font-sans text-sm text-dark-grey block">
        {Hours} hours ago
      </span>
    </div>
  );
}

export default UserInfo;
