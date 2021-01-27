import React from "react";
import Avatar from "../../Atoms/Avatar/Avatar";
const PostView = ({
  single,
  isVoted = false,
  mainCaption = `Yes or No`,
  secondaryCaption = `Whatever Caption`,
}) => {
  //primaryCaption on top of the post
  //secondaryCaption on top the photo (overlayed)
  const data = {
    name: "Jerro Lightfeather",
    votes: 14258,
  };
  if (single)
    return (
      <div className="flex flex-col flex-nowrap	justify-center	items-center	border-2 border-white shadow-dark w-6/12 m-auto px-m py-xs relative">
        {/* Post Header */}
        <div className="flex flex-row border-b  border-primary-shd6 w-full px-xs mt-xs">
          <div className="mt-1">
            <Avatar type={"user"} size={"md"} />
          </div>
          <div className=" flex flex-col justify-start align-top ml-4">
            <p className="mt-0 font-medium text-sm pt-xs">{data.name}</p>
            <p className="-mt-3 text-dark-grey font-light text-sm">
              2 hours ago
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
        {/* Post Content */}
        <div className="w-full ">
          <div id="content-container" className="w-full ">
            <div className=" p-m font-normal text-md leading-7">
              {mainCaption}
            </div>
            <div className="w-full  rounded-lg relative">
              <img src="ImagePoll.png" className="object-fill	 w-full" />
              {/* overlay */}
              <div
                id="overlay"
                className="px-xxl absolute bottom-8 left-4 flex  w-full h-8"
              >
                <div className="flex flex-row flex-nowrap justify-between w-full">
                  <div className="py-1.5 px-s text-sm bg-white bg-opacity-60 mr-auto">
                    {secondaryCaption}
                  </div>
                  <div className="ml-auto">
                    <button className="mr-2">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                          fill="#FE544A"
                        />
                        <path
                          d="M28 11H25H14.693C13.864 11 13.112 11.521 12.82 12.298L10.063 19.649C10.021 19.761 10 19.88 10 20V22C10 23.103 10.897 24 12 24H17.612L16.49 27.367C16.287 27.975 16.389 28.649 16.764 29.169C17.14 29.689 17.746 30 18.388 30H20C20.297 30 20.578 29.868 20.769 29.64L25.469 24H28C29.103 24 30 23.103 30 22V13C30 11.897 29.103 11 28 11ZM19.531 28H18.386L19.948 23.316C20.051 23.011 19.999 22.676 19.811 22.415C19.623 22.154 19.321 22 19 22H12V20.181L14.693 13H24V22.638L19.531 28ZM26 22V13H28L28.001 22H26Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button className="ml-2">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                          fill="#7048E8"
                        />
                        <path
                          d="M28 16H22.388L23.511 12.633C23.713 12.025 23.611 11.351 23.236 10.831C22.861 10.311 22.253 10 21.612 10H20C19.703 10 19.422 10.132 19.231 10.36L14.531 16H12C10.897 16 10 16.897 10 18V27C10 28.103 10.897 29 12 29H15H25.307C26.136 29 26.888 28.479 27.18 27.702L29.937 20.351C29.979 20.239 30 20.12 30 20V18C30 16.897 29.103 16 28 16ZM12 18H14V27H12V18ZM28 19.819L25.307 27H16V17.362L20.468 12H21.614L20.052 16.683C19.949 16.988 20.001 17.323 20.189 17.584C20.377 17.846 20.679 18 21 18H28V19.819Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-row flex-nowrap w-full mt-m">
          <div className="font-normal text-sm text-grey">
            {isVoted && `${data.votes.toLocaleString()} votes taken`}
            {!isVoted && `Vote to uncover the total number of voters`}
          </div>
          <button
            className="ml-auto mt-0 focus:outline-none"
            onClick={() => {
              alert("Shared");
            }}
          >
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
          </button>
        </div>
      </div>
    );
  else {
    return <div>many</div>;
  }
};

export default PostView;
