import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/getArticlesPageLimit/getArticlesPageLimit";

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticleList", async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = props;
  const limit = getArticlesPageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
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
