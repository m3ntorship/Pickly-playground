import React from "react";
import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("renders Checkbox component", () => {
  const { getByTitle } = render(<Checkbox />);
  const TestElement = getByTitle("Checkbox");
  expect(TestElement).toBeInTheDocument();
});