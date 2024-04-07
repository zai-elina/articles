import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text, TextAlign } from "shared/ui/Text/Text";
import classes from "./ArticleImageBlockComponent.module.scss";
import { ArticleImageBlock } from "../../model/types/atricle";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(classes.ArticleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} alt={block.title} className={classes.img} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  }
);

ArticleImageBlockComponent.displayName = "ArticleImageBlockComponent";
