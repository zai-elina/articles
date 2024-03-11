import { FC, useState } from "react";
import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Switchers } from "widgets/Switchers";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";

export interface SidebarProps {
  className?: string;
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <div className={classes.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={classes.item}
        >
          <MainIcon className={classes.icon} />
          <span className={classes.link}> {t("Главная")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={classes.item}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}> {t("О сайте")}</span>
        </AppLink>
      </div>
      <Button
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={classes.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.WIDTH_100}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <Switchers className={classes.switchers_bottom} collapsed={collapsed} />
    </div>
  );
};
