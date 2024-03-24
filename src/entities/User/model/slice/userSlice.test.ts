import { userActions, userReducer } from "./userSlice";
import { UserSchema } from "../types/user";

describe("userSlice", () => {
  test("test set auth data", () => {
    const state: DeepPartial<UserSchema> = {};
    const userData = { username: "123", id: "1" };

    expect(
      userReducer(state as UserSchema, userActions.setAuthData(userData))
    ).toEqual({ authData: { username: "123", id: "1" } });
  });

  test("test logout", () => {
    const state: DeepPartial<UserSchema> = {
      authData: { username: "123", id: "1" },
    };

    expect(userReducer(state as UserSchema, userActions.logout())).toEqual({});
  });
});
