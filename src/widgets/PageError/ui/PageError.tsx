import { FC } from "react";
import classes from "./PageError.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

export interface PageErrorProps {
  className?: string;
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
