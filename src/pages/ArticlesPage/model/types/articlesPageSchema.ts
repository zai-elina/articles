import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import {
  ArticleSortField,
  ArticleType,
} from "entities/Article/model/types/atricle";
import { SortOrder } from "shared/types";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  //filter
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _mounted: boolean;
}
