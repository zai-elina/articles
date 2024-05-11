import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlesPageOrder } from "../../selectors/getArticlesPageOrder/getArticlesPageOrder";
import { getArticlesPageSort } from "../../selectors/getArticlesPageSort/getArticlesPageSort";
import { getArticlesPageSearch } from "../../selectors/getArticlesPageSearch/getArticlesPageSearch";
import { getArticlesPageNum } from "../../selectors/getArticlesPageNum/getArticlesPageNum";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import { getArticlesPageType } from "../../selectors/getArticlesPageType/getArticlesPageType";
import { ArticleType } from "entities/Article/model/types/atricle";

interface FetchArticleListProps {
  replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticleList", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const page = getArticlesPageNum(getState());
  const limit = getArticlesPageLimit(getState());
  const order = getArticlesPageOrder(getState());
  const sort = getArticlesPageSort(getState());
  const search = getArticlesPageSearch(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
