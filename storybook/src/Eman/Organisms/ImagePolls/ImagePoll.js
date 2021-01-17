import React from "react";
import { Avater } from "./../../Atoms/Avatars/Avatar";
import { Tab } from "./../../Molecules/Tabs/Tab";
import { Label } from "./../../Atoms/Inputs/Label/Label";
import { Upload } from "./../../Atoms/ImageUpload/Upload";
import { Divider } from "./../../Atoms/Dividers/Divider";
import { Toggle } from "../../Atoms/Toggles/Toggle";
import { Button } from "./../../Atoms/Buttons/Primary/Button";

export const ImagePoll = () => {
  return (
    <>
      <div className="bg-grey-bg p-8">
        <div className="bg-white w-3/5 rounded-md">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <Avater type="Filled" size="Large" imgName="" />
              <div className="flex items-center">
                <Tab
                  icon="Image"
                  status="on"
                  styles="Inactive"
                  content="Image Poll"
                />
                <Tab
                  icon="Text"
                  status="off"
                  styles="Inactive"
                  content="Text Poll"
                />
                <Tab
                  icon="More"
                  status="off"
                  styles="Inactive"
                  content="Mini Survey"
                />
              </div>
            </div>
            <div className="my-4">
              <Label type="Default" placeholder="What do you ask about?" />
            </div>
            <div className="my-4">
              <Upload text="test" />
            </div>
          </div>
          <Divider type="Horizontal" range="full" />
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <Toggle size="Small" status="off" />
                <p className="text-dark-grey text-sm ml-2 mr-4">
                  Hide my identity
                </p>
              </div>
              <Divider type="Vertical" range="4" />
              <div className="flex items-center"></div>
              <p className="text-dark-grey text-sm ml-4 mr-2">Privacy:</p>
              <select className="font-semibold focus:outline-none text-dark-grey text-sm">
                <option value="public" selected>
                  Public
                </option>
                <option value="friends">Friends</option>
                <option value="private">Private</option>
              </select>
            </div>
            <Button size="small" type="primary" content="Post" disabled="on" />
          </div>
        </div>
      </div>
    </>
  );
};
