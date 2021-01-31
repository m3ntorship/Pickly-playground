import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { Inputs } from "./Inputs";

describe("should change input text", () => {
  it("show what user write", () => {
    render(<Inputs />);
    const inputText = screen.getByTestId("textChange");
    fireEvent.change(inputText, { target: { value: "i write" } });
    expect(inputText.value).toBe("i write");
  });
});
describe("Button Testing", () => {
  it("Input default testing with default type, label and placeholder", () => {
    const tree = renderer.create(<Inputs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Inputs type of success", () => {
    const tree = renderer.create(<Inputs type="Success" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Inputs type of Error", () => {
    const tree = renderer.create(<Inputs type="Error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Inputs type of disabled", () => {
    const tree = renderer.create(<Inputs type="Disabled" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
