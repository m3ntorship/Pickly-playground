import React from "react";
import renderer from "react-test-renderer";
import { InputWithLabel } from "../../../Heba/atoms/Inputs/InputWithLabel/InputWithLabel";

describe("name", () => {
  it("get input with label at default value and placeholder - What do you ask about", () => {
    const tree = renderer
      .create(
        <InputWithLabel type="Default" placeholder="What do you ask about?" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
