import { CSSProperties, FC } from "react";
import classes from "./Skeleton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface SkeletonProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  border?: string;
}
export const Skeleton: FC<SkeletonProps> = (props) => {
  const { height, width, border, className } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(classes.Skeleton, {}, [className])}
      style={styles}
    />
  );
};
