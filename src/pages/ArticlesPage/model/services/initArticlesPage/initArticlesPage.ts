import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { getArticlesPageMounted
} from "../../selectors/getArticlesPageMounted/getArticlesPageMounted";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  const mounted = getArticlesPageMounted(getState());

  if (!mounted) {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticleList({
        page: 1,
      })
    );
  }
});
