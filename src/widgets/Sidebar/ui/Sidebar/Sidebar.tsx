import {memo, useCallback, useMemo, useState } from "react";
import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Switchers } from "widgets/Switchers";
import { SidebarItemsList } from "widgets/Sidebar/model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { CollapsedButton } from "shared/ui/CollapsedButton/CollapsedButton";

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const itemList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed]
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <div className={classes.items}>{itemList}</div>

      <CollapsedButton collapsed={collapsed} onToggle={onToggle} />
      <Switchers className={classes.switchers_bottom} collapsed={collapsed} />
    </div>
  );
});

Sidebar.displayName = "Sidebar";
