import { FC } from "react";
import classes from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={"/"}
          className={classes.mainLink}
        >
          {t("Главная")}
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={"/about"}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
