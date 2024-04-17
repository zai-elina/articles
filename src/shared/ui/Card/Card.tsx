import { FC, HTMLAttributes, ReactNode } from "react";
import classes from "./Card.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
export const Card: FC<CardProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(classes.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
};
