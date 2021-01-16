import React from "react";
import renderer from "react-test-renderer";
import LabelInput from "./LabelInput";

describe("Label Input field", () => {
  it("renders a marked input field in normal state ", () => {
    const tree = renderer.create(<LabelInput status="normal" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a marked input field with error icon ", () => {
    const tree = renderer.create(<LabelInput status="error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a marked input field with success icon  ", () => {
    const tree = renderer.create(<LabelInput status="success" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders anormal input field with no icon  ", () => {
    const tree = renderer.create(<LabelInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
