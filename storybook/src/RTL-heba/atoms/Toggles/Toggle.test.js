import React from "react";
import { render, fireEvent ,screen} from "@testing-library/react";
import { Toggle } from "./Toggle";

it("renders Choices component", () => {
  const { queryByTitle } = render(<Toggle  label="hi"/>);
  const TestElement = queryByTitle("Toggle");
  expect(TestElement).toBeTruthy();
  screen.debug();
});