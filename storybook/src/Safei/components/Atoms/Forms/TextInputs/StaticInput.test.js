import React from "react";
import renderer from "react-test-renderer";
import StaticInput from "./StaticInput";

describe("Label Input field", () => {
  it("renders a marked input field with icon or prefix ", () => {
    const tree = renderer.create(<StaticInput status="error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Label Input field", () => {
  it("renders a marked input field in normal state with home icon ", () => {
    const tree = renderer
      .create(<StaticInput status={"normal"} icon={"home"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a marked input field with error icon and prefix +20", () => {
    const tree = renderer
      .create(<StaticInput status={"error"} prefix={"+20"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a marked input field with success icon + home icon + prefix =+20  ", () => {
    const tree = renderer
      .create(<StaticInput status={"success"} icon={"home"} prefix={"+20"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a marked input field disabled with default set up  ", () => {
    const tree = renderer.create(<StaticInput disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
