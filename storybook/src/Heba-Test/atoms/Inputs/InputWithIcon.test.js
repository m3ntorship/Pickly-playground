import React from "react";
import renderer from "react-test-renderer";
import { InputWithIcon } from "../../../Heba/atoms/Inputs/InputWithIcon/InputWithIcon";

describe("name", () => {
  it("return input with Default", () => {
    const tree = renderer
      .create(<InputWithIcon label="Label" type="Default" icon="left" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
