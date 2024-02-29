import { FC } from "react";
import classes from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={"/"}
          className={classes.mainLink}
        >
          main
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          about
        </AppLink>
      </div>
    </div>
  );
};
