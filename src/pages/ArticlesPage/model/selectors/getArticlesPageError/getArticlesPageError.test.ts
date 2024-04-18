import { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageError } from "./getArticlesPageError";

describe("getArticlesPageError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "error",
      },
    };

    expect(getArticlesPageError(state as StateSchema)).toEqual(
      "error"
    );
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toEqual(
      undefined
    );
  });
});
