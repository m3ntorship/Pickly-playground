import React from "react";
import imgMan from "./img/image.png";
import PropTypes from "prop-types";
export const STATES = {
  DEFAULT: "default",
  UPLOADING: "uploading",
  NOTUPLOAD: "notUpload",
};
export const ImageUpload = ({ state, placeHolder }) => {
  const myStyle = {
    imgCaption: {
      height: "40px",
    },
    imgBlur: {
      opacity: "0.2",
      filter: "blur(2px)",
    },
  };

  return (
    <>
      {state === STATES.DEFAULT ? (
        <div className="mt-4">
          <img src={imgMan}></img>
          <div
            style={myStyle.imgCaption}
            className="flex items-center border-grey-shd5 border rounded-bl-md rounded-br-md mt-1 w-full"
          >
            <svg
              className="ml-xs rounded"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                fill="#F2F9FF"
              />
              <path
                d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
                fill="#8D9A9E"
              />
            </svg>
            <input
              type="text"
              placeholder={placeHolder}
              className="inline-block w-full h-5 text-sm font-sans outline-none ml-s text-grey-shd1"
            ></input>
          </div>
        </div>
      ) : state === STATES.UPLOADING ? (
        <div className="mt-4">
          <div className="relative">
            <img src={imgMan} style={myStyle.imgBlur}></img>
            <div
              className="rounded-t-md rounded-r-md absolute bottom-0 top-0 left-0 right-0 h-full opacity-80 w-full"
              style={{
                backgroundColor: "rgba(237, 232, 252, 0.88)",
              }}
            >
              <div
                className="w-56 h-3 opacity-100 rounded-sm absolute top-1/2 left-1/3 flex items-center"
                style={{ backgroundColor: "rgba(237, 232, 252, 0.88)" }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "4px",
                    backgroundColor: "#7048E8",
                    borderRadius: "2px",
                    marginLeft: "4px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            style={myStyle.imgCaption}
            className="flex items-center border-grey-shd5 border rounded-bl-md rounded-br-md mt-1"
          >
            <svg
              className="ml-xs rounded"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                fill="#F2F9FF"
              />
              <path
                d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
                fill="#8D9A9E"
              />
            </svg>
            <input
              type="text"
              placeholder={placeHolder}
              className="inline-block w-full h-5 text-sm font-sans outline-none ml-s text-grey-shd1"
            ></input>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="relative">
            <img src={imgMan} style={myStyle.imgBlur}></img>
            <div
              className="rounded-t-md rounded-r-md absolute bottom-0 top-0 left-0 right-0 h-full opacity-80 flex items-center w-full"
              style={{
                backgroundColor: "rgba(237, 232, 252, 0.88)",
              }}
            >
              <div
                className="opacity-100 rounded-sm"
                style={{ width: "354px", height: "190px", margin: "0 auto" }}
              >
                <div className="text-center">
                  <svg
                    className="inline-block mb-11"
                    width="80"
                    height="80"
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
                  <p className="text-lg text-error font-bold pb-2">
                    Image couldn't be uploaded!
                  </p>
                  <p className="text-md text-error">Max size is 2 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={myStyle.imgCaption}
            className="flex items-center border-grey-shd5 border rounded-bl-md rounded-br-md mt-1"
          >
            <svg
              className="ml-xs rounded"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                fill="#F2F9FF"
              />
              <path
                d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
                fill="#8D9A9E"
              />
            </svg>
            <input
              type="text"
              placeholder={placeHolder}
              className="inline-block w-full h-5 text-sm font-sans outline-none ml-s text-grey-shd1"
            ></input>
          </div>
        </div>
      )}
    </>
  );
};

ImageUpload.propTypes = {
  placeHolder: PropTypes.string,
  state: PropTypes.oneOf(["default", "uploading", "notUpload"]),
};
