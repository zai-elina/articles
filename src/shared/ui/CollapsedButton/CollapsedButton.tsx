import { memo } from "react";
import classes from "./CollapsedButton.module.scss";
import { Button, ButtonSize, ButtonTheme } from "../Button/Button";

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
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.WIDTH_100}
      >
        {collapsed ? ">" : "<"}
      </Button>
    );
  }
);

CollapsedButton.displayName = "CollapsedButton";
