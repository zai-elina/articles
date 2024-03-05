import { FC } from "react";
import classes from "./Switchers.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher, ThemeSwitcher } from "widgets/Switchers";

interface SwitchersProps {
  className?: string;
}
export const Switchers: FC<SwitchersProps> = ({ className }) => {
  return (
    <div className={classNames(classes.switchers, {}, [className])}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};
