import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface ArticlesPageProps {
  className?: string;
}
const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation("article");

  return <div className={classNames("", {}, [className])}>ARTICLES_PAGE</div>;
};

export default memo(ArticlesPage);
