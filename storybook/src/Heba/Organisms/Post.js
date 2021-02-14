import React from "react";
import { Avater } from "../atoms/Avatar/Avatar";
import { Tab } from "../Molecules/Tabs/Tab";
import { InputWithLabel } from "../atoms/Inputs/InputWithLabel/InputWithLabel";
import { Man } from "../atoms/ManImage/Man";
import { Divider } from "../atoms/Line/Line";
import { InputWithOption } from "../atoms/Inputs/InputWithOption/InputWithOption";
import { ImageUpload } from "../Molecules/ImageUpload/ImageUpload";
import { Toggle } from "../atoms/Toggles/Toggle";
import { Button } from "../atoms/Buttons/Primary/Primary";
export const Post = () => {
  return (
    <section className="w-39xl h-61xl border-primary-shd7 border m-20">
      <div className="flex  flex-row items-center  w-37xl h-10  p-0  order-0  my-1 -mx-2 -mt-8">
        <Avater type="Filled" size="Medium" />
        <Tab icon="Image" status="on" styles="Active" content="Image Poll" />
        <Tab icon="Text" status="off" styles="Inactive" content="Text Poll" />
        <Tab icon="More" status="off" styles="Inactive" content="Mini Survey" />
      </div>
      <div className="flex items-start  flex-col   w-37xl  -mx-3 -mt-3 mb-7  left-0 top-0   h-10 bg-white    order-0  p-0    flex-none flex-grow-0  ">
        <InputWithLabel type="Default" placeholder="What do you ask about?" />
      </div>
      <div className=" w-18.5 h-21xl flex mt-3 gap-1 -mx-3">
        <div className=" w-18.5 h-21xl ">
          <Man type="Man4" />

          <InputWithOption type="A" />
        </div>
        <div className=" w-18.5 h-21xl ">
          <Man type="Man3" />

          <InputWithOption type="B" />
        </div>
      </div>
      <div className=" w-18.5 h-21xl flex mt-3 gap-1 -mx-3">
        <div className=" w-18.5 h-21xl ">
          <Man type="Man2" />

          <InputWithOption type="C" />
        </div>
        <div className=" w-18.5 h-21xl ">
          <Man type="Man1" />

          <InputWithOption type="D" />
        </div>
      </div>
      <ImageUpload />
      <div className="m-m -mx-5">
        <Divider type="Horizontal" range="full" />
      </div>
      <div className="flex  items-center  w-39xl h-16 -mt-3">
        <Toggle size="Small" status="off" />
        <label className="font-normal text-center  w-32 h-4 -mx-3  font-sans text-xs  text-dark-grey ">
          Hide my identity
        </label>
        <Divider type="Vertical" range="4" />
        <label className="flex font-normal text-center w-11 h-4 items-center ml-3  font-sans text-xs text-dark-grey ">
          Privacy:
        </label>
        <div className="flex group focus:outline-none">
          <select className=" inline-block font-semibold focus:outline-none text-dark-grey text-sm">
            <option value="public" selected>
              Public
            </option>
            <option value="friends">Friends</option>
            <option value="private">Family</option>
          </select>
        </div>
        <div className="  ml-60 ">
          <Button size="small" type="primary" content="Post" disabled="on" />
        </div>
      </div>
    </section>
  );
};
