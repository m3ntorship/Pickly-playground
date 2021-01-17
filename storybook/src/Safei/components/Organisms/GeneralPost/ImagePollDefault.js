import React from "react";
// import Avatar from "../../Atoms/Avatar/Avatar";
import PollTabs from "../../Mollecules/Poll Tabs/PollTabs";
import GeneralTextInput from "../../Atoms/Forms/TextInputs/GeneralTextInput";
import UploadButton from "../../Atoms/Buttons/UploadButton/UploadButton";
import PostingBar from "../../Mollecules/PostingBar/PostingBar";
import Avatar from "../../Atoms/Avatar/Avatar";

const ImagePollDefault = ({
  tabsCount,
  avatarType,
  avatarSize,
  postBtnDisabled,
}) => {
  return (
    <div className="flex flex-col w-8/12 border border-primary-shd6 justify-center px-4">
      <div className="w-full my-2 flex flex-row">
        <div className="mr-3">
          <Avatar type={avatarType} size={avatarSize} />
        </div>
        <div className="mt-2">
          <PollTabs count={tabsCount} />
        </div>
      </div>
      <div className="w-full my-3">
        <GeneralTextInput />
      </div>
      <div className="w-full my-3 ">
        <UploadButton />
      </div>
      <div className="w-full border-t border-grey-shd6 py-4 px-1">
        <PostingBar disabled={postBtnDisabled} />
      </div>
    </div>
  );
};

export default ImagePollDefault;
