import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { UserSchema } from "entities/User";
import { AddNewCommentSchema } from "features/AddNewComment";
import { ArticleRecommendationsSchema } from "features/ArticleRecommendationsList";
import { LoginSchema } from "features/AuthByUsername";
import { ProfileSchema } from "features/EditableProfileCard";
import { ScrollSaveSchema } from "features/ScrollSave";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "pages/ArticlesPage";

export interface StateSchema {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addNewComment?: AddNewCommentSchema;
  articlesPage?: ArticlesPageSchema;
  articleRecommendations?: ArticleRecommendationsSchema;
}

declare const $CombinedState: unique symbol;

export type CombinedState<S> = { readonly [$CombinedState]?: undefined } & S;

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  extra: ThunkExtraArg;
  rejectValue: T;
  state: StateSchema;
}
