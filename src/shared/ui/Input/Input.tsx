import { InputHTMLAttributes, memo, useEffect, useRef } from "react";
import classes from "./Input.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
  > {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    readonly = false,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [classes.readonly]: readonly,
  };

  return (
    <div className={classNames(classes.InputWrapper, mods, [className])}>
      <input
        ref={ref}
        className={classes.Input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        readOnly={readonly}
        {...otherProps}
      ></input>
    </div>
  );
});

Input.displayName = "Input";
