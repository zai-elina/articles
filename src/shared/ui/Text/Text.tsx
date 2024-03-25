import { memo } from "react";
import classes from "./Text.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeText {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
}
export const Text = memo((props: TextProps) => {
  const { text, title, className, theme = ThemeText.PRIMARY } = props;
  return (
    <div className={classNames(classes.Text, {}, [className, classes[theme]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});

Text.displayName = "Text";
