import { FC } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

export interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames("", {}, [className])}
      onClick={toogleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
