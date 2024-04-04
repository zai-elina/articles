import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

describe("getProfileForm.test", () => {
  test("should return error", () => {
    const formData = {
      first: "Jack",
      lastname: "Smith",
      age: 22,
      currency: Currency.RUB,
      country: Country.Russia,
      city: "",
      username: "",
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: formData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(formData);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
