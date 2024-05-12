import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleRecommendations?.isLoading ?? false;

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleRecommendations?.error;
