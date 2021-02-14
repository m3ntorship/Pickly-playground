import React from "react";
import { render } from "@testing-library/react";
import { ButtonIcon } from "./Primary-Icon";

test("renders Button component", () => {
  const { getByTitle } = render(<ButtonIcon />);
  const TestElement = getByTitle("ButtonIcon");
  expect(TestElement).toBeInTheDocument();
});