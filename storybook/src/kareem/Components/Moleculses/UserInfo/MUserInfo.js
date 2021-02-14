import React from "react";
import Avatar from "../../Atoms/Avatars/Avatar";
import Info from "../../Atoms/Avatars/UserInfo";

function MUserInfo({ status = "normal", size = "medieum", Name, Hours }) {
  return (
    <div className="flex items-center justify-start h-10">
      <Avatar size={size} status={status} />
      <Info Name={Name} Hours={Hours} />
    </div>
  );
}

export default MUserInfo;
