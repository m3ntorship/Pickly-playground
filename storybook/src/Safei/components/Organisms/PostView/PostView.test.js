import React from "react";
import renderer from "react-test-renderer";
import PostView from "./PostView";

describe("render a PostView", () => {
  it("render PostView comp ", () => {
    const tree = renderer.create(<PostView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
