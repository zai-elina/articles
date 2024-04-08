import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsCommentsIsLoading } from "./getArticleDetailsCommentsIsLoading";

describe("getArticleDetailsCommentsIsLoading.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false);
  });
});
