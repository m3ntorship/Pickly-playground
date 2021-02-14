import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("render a primary lg button", () => {
  it("render primary button comp large size", () => {
    const tree = renderer
      .create(<Button size={"lg"} type={"primary"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render secondary button comp md size", () => {
    const tree = renderer
      .create(<Button size={"md"} type={"secondary"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render text button comp sm size", () => {
    const tree = renderer.create(<Button size={"sm"} type={"text"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("render primary small button comp when no props are passed", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
