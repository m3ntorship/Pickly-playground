import React from "react";
import { Avatar } from "./../../Atoms/Avatars/Avatar";
import { Upload } from "./../../Atoms/Upload/Upload";
import { Tab } from "./../../Molecules/Tab/Tab";
import { ImageUpload } from "./../../Molecules/ImageUpload/ImageUpload";
import { Toggler } from "./../../Atoms/Toggle/Toggle";
import { Button } from "./../../Atoms/Button/Button";

export const ImagePoll = (props) => {
  const {
    avatarType,
    avatarSize,
    tabIcon1 = "image",
    tabIcon2 = "Text",
    tabIcon3 = "document",
    tabText1 = "Image",
    tabText2 = "Text",
    tabText3 = "File",
    tabDisabled,
    placeHolder,
    buttonDisabled,
    buttonsSize,
    uploaded,
    uploadedState,
    uploadCaption,
  } = props;
  return (
    <>
      <div className="bg-grey-bg p-8">
        <div className="bg-white w-3/5 rounded-md m-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Avatar anonymous={avatarType} size={avatarSize} />
              <div className="flex items-center">
                <Tab
                  Icons={tabIcon1}
                  disabled={tabDisabled}
                  LabelText={tabText1}
                />
                <Tab
                  Icons={tabIcon2}
                  disabled={tabDisabled}
                  LabelText={tabText2}
                />
                <Tab
                  Icons={tabIcon3}
                  disabled={tabDisabled}
                  LabelText={tabText3}
                />
              </div>
            </div>
            <div className="my-4">
              <input
                className={`w-full h-10 border border-grey-shd5 outline-none rounded-md text-sm py-2.5 px-10 mb-4 placeholder-grey-shd1`}
                type="text"
                placeholder={placeHolder}
              />
            </div>
            <div className="mt-4">
              {uploaded ? (
                <ImageUpload
                  state={uploadedState}
                  placeHolder={uploadCaption}
                />
              ) : (
                <Upload text="Upload one or multiple images" />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <Toggler />
                <p className="text-sm ml-2 mr-4 text-dark-grey">
                  Hide my identity
                </p>
              </div>
              <p className="text-dark-grey text-sm ml-4 mr-2">Privacy:</p>
              <select className="font-semibold focus:outline-none text-dark-grey text-sm">
                <option value="public" selected>
                  Public
                </option>
                <option value="friends">Friends</option>
                <option value="private">Private</option>
              </select>
            </div>
            <Button disabled={buttonDisabled} size={buttonsSize}>
              Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
