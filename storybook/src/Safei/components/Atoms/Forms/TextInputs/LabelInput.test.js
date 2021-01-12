import React from "react";
import renderer from "react-test-renderer";
import LabelInput from "./LabelInput";

describe("my beverage", () => {
  it("renders when an input based on status ", () => {
    const tree = renderer.create(<LabelInput status="normal" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
