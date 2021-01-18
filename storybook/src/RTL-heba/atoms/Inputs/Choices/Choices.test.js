import React from "react";
import { render, fireEvent ,screen} from "@testing-library/react";
import { Choices } from "./Choices";

it("renders Choices component", () => {
  const { queryByTitle } = render(<Choices  label="hi"/>);
  const TestElement = queryByTitle("Choices");
  expect(TestElement).toBeTruthy();
  screen.getByText('hi');
  screen.debug();
  expect(screen.getByText('hi')).toBeInTheDocument();
});
describe("btnClick", () => {
  it("onclick", () => {
    const { queryByTitle } = render(<Choices />);
    const TestElement = queryByTitle("Choices");
    fireEvent.click(TestElement);
  });
});
