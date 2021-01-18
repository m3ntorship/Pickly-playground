import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Primary";

test("renders Button component", () => {
  const { getByTitle } = render(<Button />);
  const TestElement = getByTitle("primaryBtn");
  expect(TestElement).toBeInTheDocument();
});