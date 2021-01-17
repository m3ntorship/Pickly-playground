import React from "react";

function Photo({ imageSrc, status }) {
  let imageSource = "";
  let imageStatus = "";
  let Zindex = "";
  //let bigLoader = "";
  //let smallLoader = "";
  let loader = "";
  let notload = "";

  switch (imageSrc) {
    case "normal": {
      imageSource = "./pickly-man.png";
      break;
    }
    case "other": {
      imageSource = "/man-suit.jpg";
      break;
    }
    default: {
      imageSource = "../pickly-man.png";
      break;
    }
  }

  switch (status) {
    case "normal": {
      imageStatus = "";
      Zindex = "";
      loader = "hidden";
      notload = "hidden";
      // bigLoader = "w-0 h-0";
      // smallLoader = "w-0 h-0";

      break;
    }
    case "loading": {
      //imageStatus = "filter: blur(8px);";
      imageStatus = "opacity-30 relative items-center";
      Zindex = "z-index: -1";
      loader = "";
      notload = "hidden";
      // bigLoader = "w-56 h-3 ";
      // smallLoader = "w-40 h-1";

      break;
    }
    case "notload": {
      imageStatus = "opacity-5 ";
      Zindex = "z-index: -1";
      loader = "hidden";
      notload = "";
      // bigLoader = "w-0 h-0";
      // smallLoader = "w-0 h-0";

      break;
    }
    default: {
      imageStatus = "";
      Zindex = "";
      loader = "hidden";
      notload = "hidden";

      // bigLoader = "w-0 h-0";
      // smallLoader = "w-0 h-0";
      break;
    }
  }

  return (
    <div className="relative items-center" width="704px" height="708px">
      <img
        src={imageSource}
        alt={imageStatus}
        width="704px"
        height="708px"
        className={imageStatus}
        style={{ Zindex }}
      />

      <div
        className={`${loader} w-56 h-3  absolute justify-start align-middle border-white rounded-sm top-80 left-60 bg-white`}
      >
        <div
          className={`${loader} w-40 h-1 bg-primary rounded-sm ml-1 mt-1 `}
        ></div>
      </div>

      {/* Can't Load Div  */}

      <div
        className={`${notload} absolute justify-center align-middle w-96 h-48  top-72 left-40`}
      >
        <div className="flex-col items-center justify-center align-middle  w-96 h-48   ">
          <svg
            className="w-20 h-20 ml-36"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.8432 6.66675C21.5498 6.66675 6.6665 21.6201 6.6665 40.0001C6.6665 58.3801 21.6198 73.3334 39.9998 73.3334C58.3798 73.3334 73.3332 58.3801 73.3332 40.0001C73.3332 21.6201 58.3098 6.66675 39.8432 6.66675ZM39.9998 66.6667C25.2965 66.6667 13.3332 54.7034 13.3332 40.0001C13.3332 25.2967 25.2232 13.3334 39.8432 13.3334C54.6365 13.3334 66.6665 25.2967 66.6665 40.0001C66.6665 54.7034 54.7032 66.6667 39.9998 66.6667Z"
              fill="#FE544A"
            />
            <path
              d="M36.6665 23.3333H43.3332V46.6666H36.6665V23.3333ZM36.6665 49.9999H43.3332V56.6666H36.6665V49.9999Z"
              fill="#FE544A"
            />
          </svg>
          <span className="h-9 w-96 font-sans text-lg text-error font-bold block mx-4">
            Image couldn't be uploaded!
          </span>
          <span className="h-5 font-sans text-sm text-error block mx-32">
            Max size is 2 MB
          </span>
        </div>
      </div>
    </div>
  );
}

export default Photo;
