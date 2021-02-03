import React from "react";
import renderer from "react-test-renderer";
import { Avatar } from "./Avatar";

describe("Avatar Testing", () => {
  it("Avatar default testing with size big and filled img", () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Avatar size medium testing", () => {
    const tree = renderer.create(<Avatar size="md" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Avatar size small testing", () => {
    const tree = renderer.create(<Avatar size="sm" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Avatar not filled img testing", () => {
    const tree = renderer.create(<Avatar type="notFilled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Avatar anonymous img testing", () => {
    const tree = renderer.create(<Avatar type="anon" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
