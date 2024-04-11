import { StateSchema } from "app/providers/StoreProvider";
import { getAddNewCommentError } from "./getAddNewCommentError";

describe("getAddNewCommentError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        error: "error",
      },
    };

    expect(getAddNewCommentError(state as StateSchema)).toEqual("error");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentError(state as StateSchema)).toEqual(undefined);
  });
});
