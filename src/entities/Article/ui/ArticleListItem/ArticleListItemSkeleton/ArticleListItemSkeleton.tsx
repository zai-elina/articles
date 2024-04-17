import { FC } from "react";
import classes from "../ArticleListItem.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "entities/Article/model/types/atricle";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}
export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (
  props
) => {
  const { className, view } = props;

  if (view === ArticleView.RECTANGLE) {
    return (
      <div
        className={classNames(classes.ArticleListItem, {}, [
          className,
          classes[view],
        ])}
      >
        <Card>
          <div className={classes.header}>
            <Skeleton width={30} height={30} border={"50%"} />
            <Skeleton width={150} height={16} className={classes.username} />
            <Skeleton width={150} height={16} className={classes.date} />
          </div>
          <Skeleton width={250} height={32} className={classes.title} />
          <Skeleton height={200} className={classes.img} />
          <div className={classes.footer}>
            <Skeleton height={32} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(classes.ArticleListItem, {}, [
        className,
        classes[view],
      ])}
    >
      <Card>
        <div className={classes.imgContainer}>
          <Skeleton className={classes.img} width={200} height={200} />
        </div>
        <div className={classes.infoContainer}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton
          width={200}
          height={16}
          className={classes.title}
        />
      </Card>
    </div>
  );
};
