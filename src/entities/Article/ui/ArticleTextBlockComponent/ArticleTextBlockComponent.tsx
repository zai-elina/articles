import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import classes from "./ArticleTextBlockComponent.module.scss";
import { ArticleTextBlock } from "../../model/types/atricle";

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(classes.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={classes.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={classes.paragraph} />
        ))}
      </div>
    );
  }
);

ArticleTextBlockComponent.displayName = "ArticleTextBlockComponent";
