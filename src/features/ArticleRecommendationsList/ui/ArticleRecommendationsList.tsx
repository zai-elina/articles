import { FC } from "react";
import classes from "./ArticleRecommendationsList.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleList } from "entities/Article";
import { Text, TextSize } from "shared/ui/Text/Text";

interface ArticleRecommendationsListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  error?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (
  props
) => {
  const { className, articles, isLoading, error } = props;
  const { t } = useTranslation("articles");

  if (error) {
    return null;
  }

  return (
    <div
      className={classNames(classes.ArticleRecommendationsList, {}, [
        className,
      ])}
    >
      <Text
        title={t("Peкомендуем")}
        className={classes.commentsTitle}
        size={TextSize.L}
      />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        className={classes.recommendationsList}
        target={"_blank"}
      />
    </div>
  );
};
