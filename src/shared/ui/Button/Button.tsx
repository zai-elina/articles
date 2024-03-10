import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
