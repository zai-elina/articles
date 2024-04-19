import { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageMounted = (state: StateSchema) =>
  state?.articlesPage?._mounted;
