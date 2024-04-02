import { memo } from "react";
import classes from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { SidebatItemType } from "widgets/Sidebar/model/items";
import { classNames } from "shared/lib/classNames/classNames";
import { getUserAuthData } from "entities/User";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";

interface SidebarItemProps {
  item: SidebatItemType;
  collapsed: boolean;
}

const styleCollapsed = { justifyContent: "center", marginBottom: "16px" };

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useAppSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      className={classNames(classes.item, { [classes.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      style={collapsed ? styleCollapsed : undefined}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}> {t(item.text)}</span>
    </AppLink>
  );
});

SidebarItem.displayName = "SidebarItem";
