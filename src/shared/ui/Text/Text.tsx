import { memo } from "react";
import classes from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    text,
    title,
    className,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div
      className={classNames(classes.Text, {}, [
        className,
        classes[theme],
        classes[align],
      ])}
    >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

Text.displayName = "Text";
