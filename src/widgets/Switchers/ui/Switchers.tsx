import { memo } from "react";
import classes from "./Switchers.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SwitchersProps {
  className?: string;
  collapsed?: boolean;
}
export const Switchers = memo(({ className, collapsed }: SwitchersProps) => {
  return (
    <div className={classNames(classes.switchers, {}, [className])}>
      <ThemeSwitcher />
      <LangSwitcher short={collapsed} />
    </div>
  );
});

Switchers.displayName = "Switchers";
