
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputWithLabel } from "./InputWithLabel";

test("renders Choices component", () => {
  const { queryByTitle } = render(<InputWithLabel />);
  const TestElement = queryByTitle("InputWithLabel");
  expect(TestElement).toBeTruthy();
});