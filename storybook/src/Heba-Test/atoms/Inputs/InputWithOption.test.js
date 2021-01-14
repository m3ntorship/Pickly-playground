import React from "react";
import renderer from "react-test-renderer";

//import { Man } from "../../../Heba/atoms/ManImage/Man";
import { InputWithOption } from "../../../Heba/atoms/Inputs/InputWithOption/InputWithOption";

describe("name", () => {
  it("return input with option cade A", () => {
    const tree = renderer.create(<InputWithOption type="A" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe("name", () => {
//   it("getFullName shoud return full name in middel east", () => {
//     const tree = renderer.create(<Man type="Man1" />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
