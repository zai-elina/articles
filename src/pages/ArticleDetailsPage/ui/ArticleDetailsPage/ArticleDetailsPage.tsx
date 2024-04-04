import { FC, memo } from "react";
import classes from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation("article");

  return (
    <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
      ARTICLE_DETAILS
    </div>
  );
};

export default memo(ArticleDetailsPage);
