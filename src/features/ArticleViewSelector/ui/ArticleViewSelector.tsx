import { FC } from "react";
import classes from "./ArticleViewSelector.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "entities/Article";
import SquareIcon from "shared/assets/icons/tiled.svg";
import RectangleIcon from "shared/assets/icons/list.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (newView: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SQUARE,
    icon: SquareIcon,
  },
  {
    view: ArticleView.RECTANGLE,
    icon: RectangleIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(classes.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames(
              "",
              { [classes.selected]: viewType.view === view },
              []
            )}
          />
        </Button>
      ))}
    </div>
  );
};
