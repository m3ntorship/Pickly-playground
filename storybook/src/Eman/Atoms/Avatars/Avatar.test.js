import React from "react";
import renderer from "react-test-renderer";
import { Avater } from "./Avatar";

describe("Testing avatar", () => {
  it("Testing Avatar size Large", () => {
    const tree = renderer.create(<Avater size="Large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Avatar size Medium", () => {
    const tree = renderer.create(<Avater size="Medium" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Avatar size Small", () => {
    const tree = renderer.create(<Avater size="Small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Avatar type Filled", () => {
    const tree = renderer.create(<Avater type="Filled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Avatar type Anonymous", () => {
    const tree = renderer.create(<Avater type="Anonymous" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Avatar type Not Filled", () => {
    const tree = renderer.create(<Avater type="Not Filled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Testing Avatar with no props", () => {
    const tree = renderer.create(<Avater />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
