import { FC } from "react";
import classes from "./Switchers.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "../../ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "../../LangSwitcher/ui/LangSwitcher";

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
