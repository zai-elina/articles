import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleSortField, ArticleView } from "entities/Article";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticleList } from "../services/fetchArticleList/fetchArticleList";
import { SortOrder } from "shared/types";
import { ArticleType } from "entities/Article/model/types/atricle";

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
    _mounted: false,
    order: "asc",
    sort: ArticleSortField.TITLE,
    search: "",
    limit: 0,
    type: ArticleType.ALL,
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
      state.limit = view === ArticleView.RECTANGLE ? 4 : 13;
      state._mounted = true;
    },
    setOrder: (state, actions: PayloadAction<SortOrder>) => {
      state.order = actions.payload;
    },
    setSearch: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
    },
    setSort: (state, actions: PayloadAction<ArticleSortField>) => {
      state.sort = actions.payload;
    },
    setType: (state, actions: PayloadAction<ArticleType>) => {
      state.type = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
