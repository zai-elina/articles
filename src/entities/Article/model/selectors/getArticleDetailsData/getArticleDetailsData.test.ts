import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "./getArticleDetailsData";

describe("getArticleDetailsData.test", () => {
  test("should return error", () => {
    const data = {
      id: "1",
      title: "Typescript Generics",
      subtitle: "Всё про Generics",
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
