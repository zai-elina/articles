import { FC } from "react";
import classes from "./CommentList.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, isLoading = false } = props;
  const { t } = useTranslation();

  if (isLoading) {
    <div className={classNames(classes.CommentList, {}, [className])}>
      <CommentCard isLoading={isLoading} />
      <CommentCard isLoading={isLoading} />
    </div>;
  }

  return (
    <div className={classNames(classes.CommentList, {}, [className])}>
      {comments?.length ? (
        comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t("Нет комментариев")} />
      )}
    </div>
  );
};
