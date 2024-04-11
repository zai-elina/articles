import { StateSchema } from "app/providers/StoreProvider";
import {
  addNewCommentActions,
  addNewCommentReducer,
} from "./addNewCommentSlice";
import { AddNewCommentSchema } from "../types/addNewComment";

describe("addNewCommentSlice", () => {
  test("set new text", () => {
    const state: DeepPartial<AddNewCommentSchema> = {
      text: "",
    };

    expect(
      addNewCommentReducer(
        state as AddNewCommentSchema,
        addNewCommentActions.setText("new")
      )
    ).toEqual({ text: "new" });
  });
});
