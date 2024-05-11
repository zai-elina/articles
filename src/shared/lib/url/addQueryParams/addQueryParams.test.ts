import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", () => {
  test("test with one params", () => {
    const params = getQueryParams({
      test: "value",
    });
    expect(params).toBe("?test=value");
  });
  test("test with multiply params", () => {
    const params = getQueryParams({
      test: "value",
      test2: "0",
    });
    expect(params).toEqual("?test=value&test2=0");
  });
  test("test with undefined", () => {
    const params = getQueryParams({ test: undefined, test2: "0" });
    expect(params).toBe("?test2=0");
  });
});
