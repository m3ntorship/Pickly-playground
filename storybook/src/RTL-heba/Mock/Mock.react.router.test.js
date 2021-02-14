import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link, Route, Switch } from "react-router-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

const LocationDisplay = withRouter(({ location }) => (
  <div title="location-display">{location.pathname}</div>
));
jest.mock("react-router", () => ({
  withRouter: (Comp) => (props) => <Comp {...props} />,
}));
test("displays location", () => {
  const pathname = "/some-route";
  const { queryByTitle } = render(<LocationDisplay location={{ pathname }} />);
  expect(queryByTitle("location-display")).toHaveTextContent(pathname);
});
