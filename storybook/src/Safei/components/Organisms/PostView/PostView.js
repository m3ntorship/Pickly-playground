import React from "react";
import Avatar from "../../Atoms/Avatar/Avatar";
const PostView = ({ single, isVoted = false }) => {
  //primaryCaption on top of the post
  //secondaryCaption on top the photo (overlayed)
  const data = {
    name: "Jerro Lightfeather",
    time: "2 hours ago",
    votes: "1458",
  };
  if (single)
    return (
      <div className="flex flex-col flex-nowrap	justify-center	items-center	border-2 border-white shadow-dark w-full m-auto px-m py-xs">
        <div className="flex flex-row border  border-primary-shd6 w-full px-xs mt-xs">
          <div className="mt-1">
            <Avatar type={"user"} size={"md"} />
          </div>
          <div className=" flex flex-col justify-start align-top ml-4">
            <p className="mt-0 font-medium text-sm pt-xs">{data.name}</p>
            <p className="-mt-3 text-dark-grey font-light text-sm">
              {data.time}
            </p>
          </div>

          <button
            className="ml-auto mt-0 outline-none focus:outline-none"
            onClick={() => {
              alert("Why the Click man (-_-;)");
            }}
          >
            <svg
              className="h-5 w-2"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                fill="#8D9A9E"
              />
            </svg>
          </button>
        </div>
        <div className="w-full border border-error">
          <div
            id="content-container"
            className="w-full border border-primary-shd6"
          >
            <div>top caption to be taken in props</div>
            <div className="w-full border-success border rounded-lg">
              <img src="ImagePoll.png" className="object-cover	 w-full" />
            </div>
          </div>
          <div id="content-container"></div>
          <div id="overlay">overlay with like and small caption</div>
        </div>
        {/* Footer */}
        <div className="flex flex-row flex-nowrap w-full mt-m">
          <div className="font-normal text-sm text-grey">
            {isVoted && `${data.votes} votes taken`}
            {!isVoted && `Vote to uncover the total number of voters`}
          </div>
          <div className="ml-auto mt-0">
            <svg
              className="h-5 w-5"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 13C4.41 13 5.233 12.642 5.857 12.07L12.117 15.647C12.048 15.922 12 16.204 12 16.5C12 18.43 13.57 20 15.5 20C17.43 20 19 18.43 19 16.5C19 14.57 17.43 13 15.5 13C14.59 13 13.767 13.358 13.143 13.93L6.883 10.353C6.946 10.106 6.986 9.851 6.991 9.585L13.142 6.07C13.767 6.642 14.59 7 15.5 7C17.43 7 19 5.43 19 3.5C19 1.57 17.43 0 15.5 0C13.57 0 12 1.57 12 3.5C12 3.796 12.048 4.078 12.117 4.353L6.433 7.602C5.808 6.64 4.729 6 3.5 6C1.57 6 0 7.57 0 9.5C0 11.43 1.57 13 3.5 13ZM15.5 15C16.327 15 17 15.673 17 16.5C17 17.327 16.327 18 15.5 18C14.673 18 14 17.327 14 16.5C14 15.673 14.673 15 15.5 15ZM15.5 2C16.327 2 17 2.673 17 3.5C17 4.327 16.327 5 15.5 5C14.673 5 14 4.327 14 3.5C14 2.673 14.673 2 15.5 2ZM3.5 8C4.327 8 5 8.673 5 9.5C5 10.327 4.327 11 3.5 11C2.673 11 2 10.327 2 9.5C2 8.673 2.673 8 3.5 8Z"
                fill="#8D9A9E"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  else {
    return <div>many</div>;
  }
};

export default PostView;
