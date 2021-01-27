import React from "react";
// import renderer from "react-test-renderer";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Toggle from "./Toggle";
import Checkbox from "./CheckBox";

describe("test Checkbox", () => {
  it("should return checked on click", () => {
    render(<Checkbox />);
    userEvent.click(screen.getByTestId("checkbox-test"));
    expect(screen.getByTestId("checkbox-test")).toBeChecked();
  });
});

describe("toggle click when disabled return 0 clicks", () => {
  it("should return 0 func calls", () => {
    const mockClick = jest.fn();
    render(<Toggle disabled={true} onClick={mockClick} />);
    userEvent.click(screen.getByTestId("toggle"));
    expect(mockClick).toHaveBeenCalledTimes(0);
  });
});

//snap:
// describe("Test my small components", () => {
//   //(1)
//   it("renders a Toggle Button ", () => {
//     const tree = renderer.create(<Toggle />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it("render a Checkbox", () => {
//     const tree = renderer.create(<Checkbox />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
