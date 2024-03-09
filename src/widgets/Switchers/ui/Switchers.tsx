import { FC } from "react";
import classes from "./Switchers.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

export interface SwitchersProps {
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
