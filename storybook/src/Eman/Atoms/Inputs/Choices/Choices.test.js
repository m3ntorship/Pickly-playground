import React from "react";
import renderer from "react-test-renderer";
import { Choices } from "./Choices";

describe("Testing Choices", () => {
  it("Testing Choices type Default", () => {
    const tree = renderer
      .create(<Choices type="Default" letterIndex={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Choices type Success", () => {
    const tree = renderer
      .create(<Choices type="Success" letterIndex={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Choices type Error", () => {
    const tree = renderer
      .create(<Choices type="Error" letterIndex={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Choices type Disabled", () => {
    const tree = renderer
      .create(<Choices type="Disabled" letterIndex={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
