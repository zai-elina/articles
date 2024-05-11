import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, useMemo } from "react";
import classes from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: T;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, value, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={classes.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const mods: Mods = {};

  return (
    <div className={classNames(classes.Wrapper, mods, [className])}>
      {label && <span className={classes.label}>{label}</span>}
      <select
        disabled={readonly}
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
