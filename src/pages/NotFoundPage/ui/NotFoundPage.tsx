import { FC } from "react";
import classes from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};
