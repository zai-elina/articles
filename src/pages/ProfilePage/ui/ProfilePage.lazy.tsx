import { FC, lazy } from "react";
import { ProfilePageProps } from "./ProfilePage";

export const ProfilePageLazy = lazy<FC<ProfilePageProps>>(
  () => import("./ProfilePage")
);
