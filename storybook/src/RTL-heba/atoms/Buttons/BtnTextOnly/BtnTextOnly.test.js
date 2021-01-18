import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./BtnTextOnly";

test("renders Button component", () => {
  const { getByTitle } = render(<Button />);
  const TestElement = getByTitle("buttonTest");
  expect(TestElement).toBeInTheDocument();
});
