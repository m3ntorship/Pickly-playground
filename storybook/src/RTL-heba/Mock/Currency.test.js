import { convert } from "./Currency";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue({ rates: { CAD: 1.42 } }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("Convert USD to  CAD", async () => {
  const rate = await convert("USD", "CAD");

  expect(rate).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
});
// beforeEach(() => {
//   fetch.mockClear();
// });

it("returns null when exception", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API is down"));
  const rate = await convert("USD", "CAD");
  expect(rate).toEqual(null);
  expect(fetch).toHaveBeenCalledWith(
    "https://api.exchangeratesapi.io/latest?base=USD"
  );
});
