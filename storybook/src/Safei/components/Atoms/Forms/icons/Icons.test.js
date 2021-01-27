import React from "react";
import renderer from "react-test-renderer";
import ArrowDown from "./ArrowDown";
import CorrectIcon from "./Correct";
import WrongIcon from "./Wrong";
import Home from "./Home";

describe("test for my icons", () => {
  it("display arrow down icon comp", () => {
    const tree = renderer.create(<ArrowDown />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("display home icon comp", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("display the wrong icon comp", () => {
    const tree = renderer.create(<WrongIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("display the correct icon comp", () => {
    const tree = renderer.create(<CorrectIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
