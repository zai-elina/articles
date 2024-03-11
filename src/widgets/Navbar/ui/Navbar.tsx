import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}></div>
    </div>
  );
};
