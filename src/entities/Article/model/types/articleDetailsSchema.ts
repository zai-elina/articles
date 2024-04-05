import { Article } from "./atricle";

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
