import React from "react";
import renderer from "react-test-renderer";
import PollTab from "./PollTab";

describe("Test my PollTab components", () => {
  //(1)
  it("renders a PollTab Button ", () => {
    const tree = renderer.create(<PollTab />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
