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
          <div className=" text-md font-bold rounded-full w-9 h-9 p-2 top-60  left-90    mx-60 my-1 absolute cursor-pointer">
            <span
              className="rounded-full"
              style={{ marginLeft: "-6px", marginTop: "16px" }}
            >
              <svg
                style={{ marginTop: "-24px" }}
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="white"
                ></path>
                <path
                  d="M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z"
                  fill="#5B6366"
                ></path>
              </svg>
            </span>
          </div>
          <InputWithOption type="A" />
        </div>
        <div className=" w-18.5 h-21xl ">
          <Man type="Man3" />
          <div className=" text-md font-bold rounded-full w-9 h-9 p-2 top-60  left-90    mx-60 my-1 absolute cursor-pointer">
            <span
              className="rounded-full"
              style={{ marginLeft: "-6px", marginTop: "16px" }}
            >
              <svg
                style={{ marginTop: "-24px" }}
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="white"
                ></path>
                <path
                  d="M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z"
                  fill="#5B6366"
                ></path>
              </svg>
            </span>
          </div>
          <InputWithOption type="B" />
        </div>
      </div>
      <div className=" w-18.5 h-21xl flex mt-3 gap-1 -mx-3">
        <div className=" w-18.5 h-21xl ">
          <Man type="Man2" />
          <div className=" text-md font-bold rounded-full w-9 h-9 p-2     mx-60 my-1 absolute cursor-pointer">
            <span className="rounded-full">
              <svg
                style={{ marginLeft: "-6px", marginTop: "290px" }}
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="white"
                ></path>
                <path
                  d="M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z"
                  fill="#5B6366"
                ></path>
              </svg>
            </span>
          </div>
          <InputWithOption type="C" />
        </div>
        <div className=" w-18.5 h-21xl ">
          <Man type="Man1" />
          <div className=" text-md font-bold rounded-full w-9 h-9 p-2 top-60  left-90    mx-60 my-1 absolute  cursor-pointer">
            <span className="rounded-full">
              <svg
                style={{ marginLeft: "0px", marginTop: "-292px" }}
                className="w-8 h-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="white"
                ></path>
                <path
                  d="M15.9998 14.6667C15.2665 14.6667 14.6665 15.2667 14.6665 16C14.6665 16.7334 15.2665 17.3334 15.9998 17.3334C16.7332 17.3334 17.3332 16.7334 17.3332 16C17.3332 15.2667 16.7332 14.6667 15.9998 14.6667ZM15.9998 10.6667C15.2665 10.6667 14.6665 11.2667 14.6665 12C14.6665 12.7334 15.2665 13.3334 15.9998 13.3334C16.7332 13.3334 17.3332 12.7334 17.3332 12C17.3332 11.2667 16.7332 10.6667 15.9998 10.6667ZM15.9998 18.6667C15.2665 18.6667 14.6665 19.2667 14.6665 20C14.6665 20.7334 15.2665 21.3334 15.9998 21.3334C16.7332 21.3334 17.3332 20.7334 17.3332 20C17.3332 19.2667 16.7332 18.6667 15.9998 18.6667Z"
                  fill="#5B6366"
                ></path>
              </svg>
            </span>
          </div>
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
