import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/atricle";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("profile/fetchProfileData", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
