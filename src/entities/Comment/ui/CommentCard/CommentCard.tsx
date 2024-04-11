import { FC } from "react";
import classes from "./CommentCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import DafaultAvatar from "shared/assets/defaultImages/defaultAvatar.jpg";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading = false } = props;

  if (isLoading) {
    return (
      <div className={classNames(classes.CommentCard, {}, [className])}>
        <div className={classes.commentAuthor}>
          <Skeleton width={30} height={30} border={"50%"} />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width={"100%"} height={30} className={classes.comment} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(classes.CommentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={classes.commentAuthor}
      >
        <Avatar
          size={30}
          src={comment.user?.avatar ? comment.user?.avatar : DafaultAvatar}
        />
        <Text title={comment.user.username} />
      </AppLink>
      <Text className={classes.comment} text={comment.text} />
    </div>
  );
};
