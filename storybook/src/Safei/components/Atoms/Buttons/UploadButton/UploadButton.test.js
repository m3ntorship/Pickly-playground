import React from "react";
// import renderer from "react-test-renderer";
import UploadButton from "./UploadButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//lib:
describe("upload button click", () => {
  it("should reflect click effect", () => {
    const mockClick = jest.fn();
    render(<UploadButton onClick={mockClick} />);
    const Ubtn = screen.getByTestId("upload-btn");
    userEvent.click(Ubtn);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
  it("2nd reflect click effect", () => {
    const mockClick = jest.fn();
    render(<UploadButton onClick={mockClick} />);
    const Ubtn = screen.getByTestId("upload-btn");
    userEvent.click(Ubtn);
    userEvent.click(Ubtn);
    userEvent.click(Ubtn);
    expect(mockClick).toHaveBeenCalledTimes(3);
  });
});

//snap
// describe("UploadButton  field", () => {
//   it("renders  UploadButton ", () => {
//     const tree = renderer.create(<UploadButton />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
