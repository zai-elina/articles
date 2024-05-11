import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { getArticlesPageMounted
} from "../../selectors/getArticlesPageMounted/getArticlesPageMounted";
import { SortOrder } from "shared/types";
import { ArticleSortField } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const mounted = getArticlesPageMounted(getState());

  if (!mounted) {
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const searchFromUrl = searchParams.get("search");
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }

    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }

    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticleList({}));
  }
});
