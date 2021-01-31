import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Radio } from "./Radio";

describe("Radio", () => {
  it("Check radio being disabled", () => {
    const { getByTestId } = render(<Radio disabled={true} />);
    const radio = getByTestId("inputTest");
    userEvent.click(radio);
    expect(radio).toBeDisabled();
  });

  it("Check radio not being disabled", () => {
    const { getByTestId } = render(<Radio disabled={false} />);
    const radio = getByTestId("inputTest");
    userEvent.click(radio);
    expect(radio).not.toBeDisabled();
  });
});
