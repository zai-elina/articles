import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleView } from "entities/Article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticleList } from "../services/fetchArticleList/fetchArticleList";

const articlesAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: "articlesPage",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SQUARE,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, actions: PayloadAction<ArticleView>) => {
      state.view = actions.payload;
      localStorage.setItem("ARTICLE_VIEW_LOCALSTORAGE_KEY", actions.payload);
    },
    setPage: (state, actions: PayloadAction<number>) => {
      state.page = actions.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        "ARTICLE_VIEW_LOCALSTORAGE_KEY"
      ) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.RECTANGLE ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
