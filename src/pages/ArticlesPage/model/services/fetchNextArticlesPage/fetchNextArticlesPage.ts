import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageHasMore 
} from "../../selectors/getArticlesPageHasMore/getArticlesPageHasMore";
import { getArticlesPageNum } from "../../selectors/getArticlesPageNum/getArticlesPageNum";
import { getArticlesPageIsLoading 
} from "../../selectors/getArticlesPageLoading/getArticlesPageIsLoading";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";
import { articlesPageActions } from "../../slice/articlesPageSlice";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const page = getArticlesPageNum(getState());
  const hasMore = getArticlesPageHasMore(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticleList({}));
  }
});
