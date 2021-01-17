import React from "react";

function Avatar({ status, size }) {
  let avatarImage = "";
  let sizeStyle = "";

  switch (size) {
    case "large": {
      sizeStyle = "w-14 h-14";
      break;
    }
    case "medieum": {
      sizeStyle = "w-10 h-10";
      break;
    }
    case "small": {
      sizeStyle = "w-8 h-8";
      break;
    }
    default: {
      sizeStyle = "w-14 h-14";
      break;
    }
  }

  switch (status) {
    case "normal": {
      //avatarImage = "../Images/avatar.png";
      avatarImage = "./avatar.png";
      break;
    }
    case "anonymous": {
      //avatarImage = "../Images/anonymus.png";
      avatarImage = "./anonymus.png";
      break;
    }
    case "notfilled": {
      avatarImage = "./notfield.png";
      break;
    }
    default: {
      avatarImage = "./avatar.png";
      break;
    }
  }

  return (
    <div>
      <img
        title="dummyImg"
        data-testid="testidImg"
        src={avatarImage}
        alt={avatarImage}
        className={`${sizeStyle} rounded-xl`}
      />
    </div>
  );
}

export default Avatar;
