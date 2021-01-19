import React from "react";
import PrimaryButtonSM from "./Atoms/Buttons/PrimaryButtonSM";
import PrimaryButtonMD from "./Atoms/Buttons/PrimaryButtonMD";
import PrimaryButtonLG from "./Atoms/Buttons/PrimaryButtonLG";

import PrimaryButtonDisabledSM from "./Atoms/Buttons/PrimaryButtonDisabledSM";
import PrimaryButtonDisabledMD from "./Atoms/Buttons/PrimaryButtonDisabledMD";
import PrimaryButtonDisabledLG from "./Atoms/Buttons/PrimaryButtonDisabledLG";

// import SecondaryDisabledButtonSM from "./Atoms/Buttons/SecondaryButtonDisabledSM";
// import SecondaryDisabledButtonMD from "./Atoms/Buttons/SecondaryButtonDisabledMD";
// import SecondaryDisabledButtonLG from "./Atoms/Buttons/SecondaryButtonDisabledLG";

// import SecondaryButtonDisabledSM from "./Safei/components/Atoms/Buttons/SecondaryButtonDisabledSM";
// import SecondaryButtonDisabledMD from "./Safei/components/Atoms/Buttons/SecondaryButtonDisabledMD";
// import SecondaryButtonDisabledLG from "./Atoms/Buttons/SecondaryButtonDisabledLG";
import "../../css/index.css";
import LabelInput from "./Atoms/Forms/TextInputs/LabelInput";
import StaticInput from "./Atoms/Forms/TextInputs/StaticInput";

import Toggle from "./Atoms/Toggles/Toggle";
import CheckBox from "./Atoms/Toggles/CheckBox";

function MainContainer() {
  return (
    <>
      <h1 className="text-4xl font-bold pt-20 text-center mb-5">
        Hello Pickly!
      </h1>
      <div className="App  flex items-center justify-evenly mb-5">
        <PrimaryButtonSM text={"Prop Text"} />
        <PrimaryButtonMD text={"Prop Text"} />
        <PrimaryButtonLG text={"Prop Text"} />
      </div>
      <div className="App  flex items-center justify-evenly mb-5">
        <PrimaryButtonDisabledSM text={"Prop Text"} />
        <PrimaryButtonDisabledMD text={"Prop Text"} />
        <PrimaryButtonDisabledLG text={"Prop Text"} />
      </div>
      {/* <div className="App  flex items-center justify-evenly mb-5">
        <SecondaryDisabledButtonSM text={"Prop Text"} />
        <SecondaryDisabledButtonMD text={"Prop Text"} />
        <SecondaryDisabledButtonLG text={"Prop Text"} />
      </div>

      <div className="App  flex items-center justify-evenly mb-5">
        <SecondaryButtonDisabledSM text={"Prop Text"} />
        <SecondaryButtonDisabledMD text={"Prop Text"} />
        <SecondaryButtonDisabledLG text={"Prop Text"} />
      </div> */}
      <h3 className="text-lg font-bold text-white text-center bg-success mb-5">
        {" "}
        Forms
      </h3>
      <div className="App  flex items-center justify-evenly mb-5">
        <LabelInput placeholder={"ex: Bertolt"} status={"normal"} />
        <LabelInput placeholder={"ex: Marco"} status={"error"} />
        <LabelInput placeholder={"ex: Armin"} status={"success"} />
      </div>
      <div className="App  flex items-center justify-evenly mb-5">
        <StaticInput
          placeholder={"ex: Annie"}
          status={"normal"}
          direction={"flex-row"}
          prefix={"none"}
          icon={"home"}
        />
        <StaticInput
          placeholder={"ex: Reiner"}
          status={"error"}
          direction={"flex-row"}
          prefix={"none"}
          icon={"home"}
        />
        <StaticInput
          placeholder={"ex: Gabby"}
          status={"success"}
          direction={"flex-row"}
          prefix={"none"}
          icon={"home"}
        />
      </div>
      <div className="App  flex items-center justify-evenly mb-5">
        <StaticInput
          placeholder={"ex: Armin"}
          status={"normal"}
          direction={"flex-row"}
          prefix={"+20"}
        />
        <StaticInput
          placeholder={"ex: Armin"}
          status={"error"}
          direction={"flex-row"}
          prefix={"+20"}
        />

        <StaticInput
          placeholder={"ex: Eereeh"}
          status={"success"}
          direction={"flex-row"}
          prefix={"+20"}
        />
      </div>
      <div className="App flex items-center justify-evenly mb-5">
        <StaticInput
          placeholder={"ex: Armin"}
          status={"normal"}
          direction={"flex-row"}
          prefix={"+20"}
          disabled={"true"}
        />
      </div>

      <div className="App flex items-center justify-evenly mb-5">
        <Toggle disabled={false} size={"lg"} />
        <Toggle on={false} disabled={true} size={"lg"} />
        <Toggle on={true} disabled={false} size={"sm"} />
      </div>

      <div className="App flex items-center justify-evenly mb-5">
        <CheckBox size={"lg"} />
        <CheckBox size={"sm"} />
        <CheckBox disabled={true} />
      </div>
    </>
  );
}

export default MainContainer;
