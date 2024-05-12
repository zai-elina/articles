import { FC, HTMLAttributeAnchorTarget } from "react";
import classes from "./ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "../../model/types/atricle";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye.svg";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation("article");

  const types = (
    <Text text={article.type.join(", ")} className={classes.types} />
  );
  const views = (
    <>
      <Text text={String(article.views)} className={classes.view} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.RECTANGLE) {
    const textBlock = article.blocks?.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(classes.ArticleListItem, {}, [
          className,
          classes[view],
        ])}
      >
        <Card>
          <div className={classes.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={classes.username} />
            <Text text={article.createdAt} className={classes.date} />
          </div>
          <Text text={article.title} className={classes.title} />
          {types}
          <img src={article.img} alt={article.title} className={classes.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={classes.textBlock}
            />
          )}
          <div className={classes.footer}>
            <AppLink to={`${RoutePath.article_details}${article.id}`}>
              <Button>{t("Читать далее...")}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={`${RoutePath.article_details}${article.id}`}
      className={classNames(classes.ArticleListItem, {}, [
        className,
        classes[view],
      ])}
    >
      <Card>
        <div className={classes.imgContainer}>
          <img src={article.img} alt={article.title} className={classes.img} />
          <Text text={article.createdAt} className={classes.date} />
        </div>
        <div className={classes.infoContainer}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={classes.title} />
      </Card>
    </AppLink>
  );
};
