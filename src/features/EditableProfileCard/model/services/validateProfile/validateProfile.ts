import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NOT_DATA];
  }
  const { first, lastname, age, username } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname)
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);

  if (!age || !Number.isInteger(age) || String(age).length > 3 || age < 0)
    errors.push(ValidateProfileError.INCORRECT_AGE);

  if (!username) errors.push(ValidateProfileError.INCORRECT_USERNAME);

  return errors;
};
