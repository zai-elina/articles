import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";

jest.mock("../fetchArticleList/fetchArticleList");

describe("fetchNextArticlesPage.test", () => {
  test("fetchNextArticlesPage called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 6,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalled();
  });

  test("fetchNextArticlesPage not called with false hasMore", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: false,
        limit: 6,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });

  test("fetchNextArticlesPage not called with true isLoading", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        hasMore: true,
        isLoading: true,
        limit: 6,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
