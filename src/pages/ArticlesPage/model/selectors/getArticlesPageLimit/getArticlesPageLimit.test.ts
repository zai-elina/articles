import { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageLimit } from "./getArticlesPageLimit";

describe("getArticlesPageLimit.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 4,
      },
    };

    expect(getArticlesPageLimit(state as StateSchema)).toEqual(4);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
  });
});
