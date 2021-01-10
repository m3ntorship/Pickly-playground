import React from "react";
import cn from "classnames";
export const Choices = ({ isLabel, label, choice }) => {
  return (
    <div className="flex items-center">
      <div className="w-3/12 mr-4">
        <label
          htmlFor="phone-number"
          className={cn(
            isLabel ? "mb-3 ml-1 font-light text-dark-grey text-xs" : "hidden"
          )}
        >
          {label}
        </label>
        <div
          className={cn(
            "relative rounded-md border border-grey-shd5 hover:border-grey-shd2 focus:outline-none  focus:ring-2 focus:ring-primary "
          )}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className=" bg-grey-shd7 rounded-md ">
              <span className="text-sm text-grey font-normal leading-5 uppercase  px-2 py-1  ">
                {choice}
              </span>
            </span>
          </div>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="text-dark-grey placeholder-grey-shd1 focus:ring-1 focus:ring-dark-grey focus:text-dark focus:outline-none block w-full py-3 px-12 sm:text-sm rounded-md"
            placeholder="Enter Text"
            autoComplete="off"
          />
          <div className={cn("absolute inset-y-0 right-4 flex items-center")}>
            <svg
              className="w-4 h-auto hidden"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33337C4.32367 1.33337 1.33301 4.32404 1.33301 8.00004C1.33301 11.676 4.32367 14.6667 7.99967 14.6667C11.6757 14.6667 14.6663 11.676 14.6663 8.00004C14.6663 4.32404 11.6757 1.33337 7.99967 1.33337ZM10.8043 9.86204L9.86168 10.8047L7.99967 8.94271L6.13767 10.8047L5.19501 9.86204L7.05701 8.00004L5.19501 6.13804L6.13767 5.19537L7.99967 7.05737L9.86168 5.19537L10.8043 6.13804L8.94234 8.00004L10.8043 9.86204Z"
                fill="#8D9A9E"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-3/12 mr-4 opacity-50">
        <label
          htmlFor="phone-number"
          className={cn(
            isLabel ? "mb-3 ml-1 font-light text-dark-grey text-xs" : "hidden"
          )}
        >
          Label
        </label>
        <div className={cn("relative rounded-md border border-grey-shd5 ")}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className=" bg-grey-shd7 rounded-md ">
              <span className="text-sm text-grey font-normal leading-5 uppercase  px-2 py-1  ">
                B
              </span>
            </span>
          </div>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="text-dark-grey placeholder-grey-shd1  block w-full py-3 px-12 sm:text-sm rounded-md"
            placeholder="Enter Text"
            autoComplete="off"
            disabled
          />
          <div className={cn("absolute inset-y-0 right-4 flex items-center")}>
            <svg
              className="w-4 h-auto hidden"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99967 1.33337C4.32367 1.33337 1.33301 4.32404 1.33301 8.00004C1.33301 11.676 4.32367 14.6667 7.99967 14.6667C11.6757 14.6667 14.6663 11.676 14.6663 8.00004C14.6663 4.32404 11.6757 1.33337 7.99967 1.33337ZM10.8043 9.86204L9.86168 10.8047L7.99967 8.94271L6.13767 10.8047L5.19501 9.86204L7.05701 8.00004L5.19501 6.13804L6.13767 5.19537L7.99967 7.05737L9.86168 5.19537L10.8043 6.13804L8.94234 8.00004L10.8043 9.86204Z"
                fill="#8D9A9E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
