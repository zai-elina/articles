import { FC, lazy } from "react";
import { AddNewCommentProps } from "./AddNewComment";

export const AddNewCommentLazy: FC<AddNewCommentProps> = lazy(
  () => import("./AddNewComment")
);
