import { memo, useCallback, useMemo, useState } from "react";
import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Switchers } from "widgets/Switchers";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { CollapsedButton } from "shared/ui/CollapsedButton/CollapsedButton";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getSidebarItems } from "../../model/selectors/getSidebarItems/getSidebarItems";

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useAppSelector(getSidebarItems);

  const onToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const itemList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, sidebarItemsList]
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
