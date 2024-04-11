import { StateSchema } from "app/providers/StoreProvider";

export const getAddNewCommentError = (state: StateSchema) =>
  state?.addNewComment?.error;
