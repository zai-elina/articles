import { FC } from "react";
import "./Loader.scss";

export interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
