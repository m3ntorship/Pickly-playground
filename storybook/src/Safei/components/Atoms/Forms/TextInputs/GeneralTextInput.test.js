import React from "react";
// import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GeneralTextInput from "./GeneralTextInput";
//testing lib:
describe("should change input text", () => {
  it("should reflect user input", () => {
    const changeMock = jest.fn();
    render(<GeneralTextInput onChange={changeMock} />);
    const inputG = screen.getByTestId("text-general");
    userEvent.type(inputG, "wow");
    expect(inputG.value).toBe("wow");
  });
});

// describe("GeneralTextInput field", () => {
//   it("renders a marked input ", () => {
//     const tree = renderer.create(<GeneralTextInput />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
