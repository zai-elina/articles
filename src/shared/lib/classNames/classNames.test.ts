import { classNames } from "./classNames";


describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expexted = "someClass cls1 cls2";
    expect(classNames("someClass", {}, ["cls1", "cls2"])).toBe(expexted);
  });

  test("with mods true", () => {
    const expexted = "someClass cls1 cls2 mod1 mod2";
    expect(
      classNames("someClass", { mod1: true, mod2: true }, ["cls1", "cls2"])
    ).toBe(expexted);
  });

  test("with mods false", () => {
    const expexted = "someClass cls1 cls2 mod1";
    expect(
      classNames("someClass", { mod1: true, mod2: false }, ["cls1", "cls2"])
    ).toBe(expexted);
  });

  test("with mods undefined", () => {
    const expexted = "someClass cls1 cls2 mod1";
    expect(
      classNames("someClass", { mod1: true, mod2: undefined }, ["cls1", "cls2"])
    ).toBe(expexted);
  });
});
