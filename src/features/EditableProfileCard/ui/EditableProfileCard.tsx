import { FC, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData } from "../model/services/fetchProfileData/fetchProfileData";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard } from "entities/Profile";
import { profileActions, profileReducer } from "../model/slice/profileSlice";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader/EditableProfileCardHeader";
import { getProfileReadonly } from "../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileForm } from "../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../model/selectors/getProfileError/getProfileError";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { 
  getProfileValidateErrors 
} from "../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { TextTheme, Text } from "shared/ui/Text/Text";
import { ValidateProfileError } from "../model/types/profile";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getProfileForm);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const readonly = useAppSelector(getProfileReadonly);
  const validateErrors = useAppSelector(getProfileValidateErrors);

  const validateErrorsTranslation = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      "Имя и фамилия обязательные поля"
    ),
    [ValidateProfileError.INCORRECT_AGE]: t("Неккоректный возраст"),
    [ValidateProfileError.INCORRECT_USERNAME]: t("Username обязательное поле"),
    [ValidateProfileError.NOT_DATA]: t("Нет данных"),
    [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <EditableProfileCardHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Text
            text={validateErrorsTranslation[err]}
            theme={TextTheme.ERROR}
            key={err}
          />
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </DynamicModuleLoader>
  );
};
