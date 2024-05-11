import { FC, ReactNode, memo, useCallback } from "react";
import classes from "./Tabs.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs, value, onTabClick } = props;

  const handleTabs = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(classes.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.OUTLINE : CardTheme.NORMAL}
          className={classes.tab}
          key={tab.value}
          onClick={handleTabs(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export default memo(Tabs);
