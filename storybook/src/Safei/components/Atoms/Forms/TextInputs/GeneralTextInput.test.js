import React from "react";
import renderer from "react-test-renderer";
import GeneralTextInput from "./GeneralTextInput";

describe("GeneralTextInput field", () => {
  it("renders a marked input ", () => {
    const tree = renderer.create(<GeneralTextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
