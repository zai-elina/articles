import { Currency } from "entities/Currency";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfile } from "./validateProfile";
import { Country } from "entities/Country";

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

describe("validateProfile.test", () => {
  test("success profile", () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });
  test("error profile", () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USERNAME,
    ]);
  });
  test("empty profile", () => {
    const result = validateProfile();

    expect(result).toEqual([ValidateProfileError.NOT_DATA]);
  });
  test("empty user data", () => {
    const result = validateProfile({ ...data, first: "", lastname: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test("empty age", () => {
    const result = validateProfile({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test("negative age", () => {
    const result = validateProfile({ ...data, age: -3 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test("float age", () => {
    const result = validateProfile({ ...data, age: 3.1 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test("long age", () => {
    const result = validateProfile({ ...data, age: 33333 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test("empty username", () => {
    const result = validateProfile({ ...data, username: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });
});
