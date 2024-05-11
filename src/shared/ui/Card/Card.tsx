import { FC, HTMLAttributes, ReactNode } from "react";
import classes from "./Card.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINE = "outline",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}
export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(classes.Card, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
