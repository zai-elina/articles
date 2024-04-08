import { FC } from "react";
import classes from "./Icon.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
export const Icon: FC<IconProps> = ({ className, Svg }) => {
  return <Svg className={classNames(classes.Icon, {}, [className])} />;
};
