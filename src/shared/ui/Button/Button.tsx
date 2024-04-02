import { ButtonHTMLAttributes, memo } from "react";
import classes from "./Button.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
  WIDTH_100 = "width_100",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [classes[theme]]: true,
    [classes.square]: square,
    [classes[size]]: true,
    [classes.disabled]: disabled,
  };

  return (
    <button
      className={classNames(classes.Button, mods, [className, classes[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
