import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
  WIDTH_100 = "width_100",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = SizeButton.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
    [classes.square]: square,
    [classes[size]]: true,
  };

  return (
    <button
      className={classNames(classes.Button, mods, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
