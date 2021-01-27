import React from "react";
import "@testing-library/jest-dom";
import axiosMock from  'axios';
import { render, cleanup, waitFor } from "@testing-library/react";
import Fetch from "./Mock-Api";

afterEach(cleanup);
it("fetches and displays data", async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });
 
  const url = "/greeting";
  const { getByTestId } = render(<Fetch url={url} />);
  expect(getByTestId("loading")).toHaveTextContent("Loading data...");
  const resolvedSpan = await waitFor(() => getByTestId("resolved"));
  expect(resolvedSpan).toHaveTextContent("hello there");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});