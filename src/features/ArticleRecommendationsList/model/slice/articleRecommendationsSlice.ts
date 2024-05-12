import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleRecommendationsSchema } from "../types/ArticleRecommendationsSchema";
import { Article } from "entities/Article";
import { fetchArticleRecommendations
} from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const articleRecommendationsAdapter = createEntityAdapter({
  selectId: (comment: Article) => comment.id,
});

export const getArticleRecommendations =
  articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleRecommendations ||
      articleRecommendationsAdapter.getInitialState()
  );

const articleRecommendationsSlice = createSlice({
  name: "articleRecommendations",
  initialState:
    articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        articleRecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleRecommendationsActions } =
  articleRecommendationsSlice;
export const { reducer: articleRecommendationsReducer } =
  articleRecommendationsSlice;
