import { memo } from "react";
import classes from "./CollapsedButton.module.scss";
import { Button, SizeButton, ThemeButton } from "../Button/Button";

interface CollapsedButtonProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const CollapsedButton = memo(
  ({ onToggle, collapsed }: CollapsedButtonProps) => {
    return (
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
    );
  }
);

CollapsedButton.displayName = "CollapsedButton";
