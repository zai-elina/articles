import { Country } from "entities/Country";
import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Currency } from "entities/Currency";

const data: Profile = {
  first: "Элина",
  lastname: "Зайнуллина",
  age: 22,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: "Kazan",
  username: "admin",
  avatar: "https://bgstaff.ru/upload/bgstaff/pages/tekhnik.jpg",
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: undefined };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile(data))
    ).toEqual({ form: data });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: data,
      validateError: [],
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ form: data, readonly: true, data, validateError: undefined });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.INCORRECT_AGE],
    };

    const pendingAction = {
      type: "profile/updateProfileData/pending",
      meta: {
        requestStatus: "pending",
      },
    };

    expect(profileReducer(state as ProfileSchema, pendingAction)).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.INCORRECT_AGE],
    };

    const fulfilledAction = {
      type: "profile/updateProfileData/fulfilled",
      payload: data,
      meta: {
        requestStatus: "fulfilled",
      },
    };

    expect(profileReducer(state as ProfileSchema, fulfilledAction)).toEqual({
      isLoading: false,
      data: data,
      form: data,
      readonly: true,
      validateError: undefined,
    });
  });
});
