import { InputHTMLAttributes, memo, useEffect, useRef } from "react";
import classes from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
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

  return (
    <div className={classNames(classes.InputWrapper, {}, [className])}>
      <input
        ref={ref}
        className={classes.Input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        {...otherProps}
      ></input>
    </div>
  );
});

Input.displayName = "Input";
