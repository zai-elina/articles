import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";

jest.mock("../fetchArticleList/fetchArticleList");

describe("initArticlesPage.test", () => {
  test("initArticlesPage called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _mounted: false,
      },
    });
    const params = new URLSearchParams();
    await thunk.callThunk(params);

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalled();
  });

  test("initArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _mounted: true,
      },
    });
    const params = new URLSearchParams();
    await thunk.callThunk(params);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
