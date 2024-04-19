import { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageHasMore } from "./getArticlesPageHasMore";

describe("getArticlesPageHasMore.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true,
      },
    };

    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false);
  });
});
