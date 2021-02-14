import { textLowerCase, multiplay } from "./HelperFunctions";

test("multiplay function test", () => {
  expect(multiplay(2, 10)).toBe(20);
  expect(multiplay(2, 1)).toBe(2);
});

test("Lowercase function test", () => {
  expect(textLowerCase("KAREEM")).toBe("kareem");
  expect(textLowerCase("EE")).toBe("ee");
});
