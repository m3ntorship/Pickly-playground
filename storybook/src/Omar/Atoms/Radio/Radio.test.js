import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("Check radio1 being disabled", () => {
    const { getByTestId } = render(<Radio disabled={true} />);
    const radio = getByTestId("radio1");
    userEvent.click(radio);
    expect(radio).toBeDisabled();
  });

  it("Check radio1 not being disabled", () => {
    const { getByTestId } = render(<Radio disabled={false} />);
    const radio = getByTestId("radio1");
    userEvent.click(radio);
    expect(radio).not.toBeDisabled();
  });

  it("radio1 is checked", () => {
    const { getByTestId } = render(<Radio />);
    const radio = getByTestId("radio1");
    userEvent.click(radio);
    expect(radio).toBeChecked();
  });

  it("radio1 is not checked", () => {
    const { getByTestId } = render(<Radio />);
    const radio1 = getByTestId("radio1");
    const radio2 = getByTestId("radio2");
    userEvent.click(radio2);
    expect(radio1).not.toBeChecked();
  });

  it("radio2 is checked", () => {
    const { getByTestId } = render(<Radio />);
    const radio2 = getByTestId("radio2");
    userEvent.click(radio2);
    expect(radio2).toBeChecked();
  });

  it("radio2 is not checked", () => {
    const { getByTestId } = render(<Radio />);
    const radio1 = getByTestId("radio1");
    const radio2 = getByTestId("radio2");
    userEvent.click(radio1);
    expect(radio2).not.toBeChecked();
  });
});
