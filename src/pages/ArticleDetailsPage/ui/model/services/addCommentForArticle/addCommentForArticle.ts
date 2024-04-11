import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";
import { Comment } from "entities/Comment";
import { getArticleDetailsData } from "entities/Article";
import { addNewCommentActions } from "features/AddNewComment/model/slice/addNewCommentSlice";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;

  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.post<Comment>(`/comments`, {
      articleId: article?.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(addNewCommentActions.setText(""));
    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
