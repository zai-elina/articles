import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsCommentsError } from "./getArticleDetailsCommentsError";

describe("getArticleDetailsCommentsError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: "error",
      },
    };

    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      "error"
    );
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      undefined
    );
  });
});
