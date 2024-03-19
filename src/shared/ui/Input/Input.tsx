import { InputHTMLAttributes, memo } from "react";
import classes from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(classes.InputWrapper, {}, [className])}>
      <input
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
