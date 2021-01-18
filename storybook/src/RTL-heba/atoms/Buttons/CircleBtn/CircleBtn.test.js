import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./CircleBtn";

test("renders Button component", () => {
  const { getByTitle } = render(<Button />);
  const TestElement = getByTitle("circlebtntest");
  expect(TestElement).toBeInTheDocument();
});
