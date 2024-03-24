import { memo, useCallback } from "react";
import classes from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../modal/slice/loginSlice";
import { loginByUsername } from "../../modal/service/loginByUsername";
import { Text, ThemeText } from "shared/ui/Text/Text";
import { useAppDispatch } from "app/providers/StoreProvider";
import { getLoginUsername } from "../../modal/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../modal/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../modal/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../modal/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onClickLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onClickLogin();
      }
    },
    [onClickLogin]
  );
  
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(classes.LoginForm, {}, [className])}>
        <Text title={t("Вход")} />
        {error && (
          <Text
            text={t("Вы ввели неверный логин или пароль")}
            theme={ThemeText.ERROR}
          />
        )}
        <Input
          className={classes.input}
          type="text"
          placeholder={t("Введите логин")}
          autofocus
          onChange={onChangeUserName}
          value={username ?? ""}
          onKeyPress={onKeyPress}
        ></Input>
        <Input
          className={classes.input}
          type="text"
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password ?? ""}
          onKeyPress={onKeyPress}
        ></Input>
        <Button
          className={classes.loginButton}
          theme={ThemeButton.BACKGROUND}
          onClick={onClickLogin}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = "LoginForm";
export default LoginForm;
