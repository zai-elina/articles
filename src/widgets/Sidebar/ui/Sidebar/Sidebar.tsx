import { FC, useState } from "react";
import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Switchers } from "widgets/Switchers";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface SidebarProps {
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
      className={classNames(
        classes.Sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button onClick={onToggle}>{t("Свернуть")}</Button>
      <Switchers className={classes.switchers_bottom} />
    </div>
  );
};
