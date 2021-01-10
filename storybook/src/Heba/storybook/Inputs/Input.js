import React from "react";
export const Input_Optins = {
  Case: {
    Normal: "normal",
    Success: "success",
    Failure: "failure",
  },
};
export const Input = ({ casetype }) => {
  {
    if (casetype === Input_Optins.Case.Normal) {
      return (
        <div className="w-80 h-10 flex-col justify-start">
          <div className="flex items-center pl-1 align-middle rounded-md border border-dark">
            <input
              type="text"
              id="text2"
              placeholder="Enter text"
              className="w-80 h-10 text-sm outline-none"
            />
            <svg
              className="ml-0 mr-2"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00016 0.333313C3.32416 0.333313 0.333496 3.32398 0.333496 6.99998C0.333496 10.676 3.32416 13.6666 7.00016 13.6666C10.6762 13.6666 13.6668 10.676 13.6668 6.99998C13.6668 3.32398 10.6762 0.333313 7.00016 0.333313ZM9.80483 8.86198L8.86216 9.80465L7.00016 7.94265L5.13816 9.80465L4.1955 8.86198L6.0575 6.99998L4.1955 5.13798L5.13816 4.19531L7.00016 6.05731L8.86216 4.19531L9.80483 5.13798L7.94283 6.99998L9.80483 8.86198Z"
                fill="#8D9A9E"
              ></path>
            </svg>
          </div>
        </div>
      );
    }
    if (casetype === Input_Optins.Case.Success) {
      return (
        <div className="w-80 h-10 flex-col justify-start">
          <div className="flex items-center pl-1 align-middle rounded-md border border-success">
            <input
              type="text"
              id="text2"
              placeholder="Enter text"
              className="w-80 h-10 text-sm outline-none"
            />
            <svg
              className="ml-0 mr-3"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66681 10.3906L4.47148 8.19527L3.52881 9.13794L6.66681 12.2759L13.1381 5.8046L12.1955 4.86194L6.66681 10.3906Z"
                fill="#07B255"
              ></path>
            </svg>
          </div>
        </div>
      );
    }
    if (casetype === Input_Optins.Case.Failure) {
      return (
        <div className="w-80 h-10 flex-col justify-start">
          <div className="flex items-center align-middle rounded-md pl-1 border border-error">
            <input
              type="text"
              id="text2"
              placeholder="Enter text"
              className="w-80 h-10 text-sm outline-none"
            />

            <svg
              className="ml-0 mr-3"
              width="2"
              height="8"
              viewBox="0 0 2 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333496 0.666626H1.66683V5.33329H0.333496V0.666626ZM0.333496 5.99996H1.66683V7.33329H0.333496V5.99996Z"
                fill="#FE544A"
              ></path>
            </svg>
          </div>
        </div>
      );
    }
  }
};
