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
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalledWith({ page: 1 });
  });

  test("initArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _mounted: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
