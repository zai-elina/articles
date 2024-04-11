import { StateSchema } from "app/providers/StoreProvider";
import { getAddNewCommentText } from "./getAddNewCommentText";

describe("getAddNewCommentText.test", () => {
  test("should return text", () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        text: "text",
      },
    };

    expect(getAddNewCommentText(state as StateSchema)).toEqual("text");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentText(state as StateSchema)).toEqual(undefined);
  });
});
