import { FC } from "react";
import classes from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}
export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Input className={classes.input} type="text"></Input>
      <Input className={classes.input} type="text"></Input>
      <Button className={classes.loginButton}>{t("Войти")}</Button>
    </div>
  );
};
