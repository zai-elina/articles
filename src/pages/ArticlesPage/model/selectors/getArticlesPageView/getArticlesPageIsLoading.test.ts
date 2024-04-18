import { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageView } from "./getArticlesPageView";
import { ArticleView } from "entities/Article";

describe("getArticlesPageView.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.RECTANGLE,
      },
    };

    expect(getArticlesPageView(state as StateSchema)).toEqual("RECTANGLE");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageView(state as StateSchema)).toEqual("SQUARE");
  });
});
