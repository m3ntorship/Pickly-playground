import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("Checkbox not clicked while it's disabled", () => {
    const mockClick = jest.fn();
    render(<Checkbox disabled={true} onClick={mockClick} />);
    //const label = screen.getByTestId("label");
    const input = screen.getByTestId("input");
    userEvent.click(input);
    expect(mockClick).toHaveBeenCalledTimes(0);
  });

  it("check if it's clicked", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("check if it's not clicked", () => {
    render(<Checkbox />);
    userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
