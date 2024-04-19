import { FC } from "react";
import classes from "./ArticleList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/atricle";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton
} from "../ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}
export const ArticleList: FC<ArticleListProps> = (props) => {
  const { className, articles, isLoading, view = ArticleView.SQUARE } = props;

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} key={article.id} />;
  };

  return (
    <div
      className={classNames(classes.ArticleList, {}, [
        className,
        classes[view],
      ])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && (
        <>
          {new Array(view === ArticleView.SQUARE ? 12 : 3)
            .fill(0)
            .map((_, index) => (
              <ArticleListItemSkeleton view={view} key={index} />
            ))}
        </>
      )}
    </div>
  );
};
