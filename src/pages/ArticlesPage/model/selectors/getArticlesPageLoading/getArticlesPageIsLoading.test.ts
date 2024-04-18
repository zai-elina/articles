import { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageIsLoading } from "./getArticlesPageIsLoading";

describe("getArticlesPageIsLoading.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };

    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
  });
});
