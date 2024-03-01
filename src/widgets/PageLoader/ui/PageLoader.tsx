import { FC } from "react";
import classes from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
