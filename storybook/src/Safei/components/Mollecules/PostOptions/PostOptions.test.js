import React from "react";
import renderer from "react-test-renderer";
import PostOptions from "./PostOptions";

describe("Test my PostOptions components", () => {
  //(1)
  it("renders a PostOptions bar ", () => {
    const tree = renderer.create(<PostOptions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
