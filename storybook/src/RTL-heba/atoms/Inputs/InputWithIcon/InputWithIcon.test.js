import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputWithIcon } from "./InputWithIcon";

test("renders Choices component", () => {
  const { queryByTitle } = render(<InputWithIcon />);
  const TestElement = queryByTitle("InputWithIcon");
  expect(TestElement).toBeTruthy();
});
