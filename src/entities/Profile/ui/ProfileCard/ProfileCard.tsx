import { FC } from "react";
import classes from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  const data = useAppSelector(getProfileData);
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  return (
    <div className={classNames(classes.ProfileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t("Профиль")} />
        <Button className={classes.editButton} theme={ThemeButton.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
      {data && (
        <div className={classes.data}>
          <Input
            className={classes.input}
            value={data?.first}
            placeholder={t("Ваше имя")}
          />
          <Input
            className={classes.input}
            value={data?.lastname}
            placeholder={t("Ваша фамилия")}
          />
        </div>
      )}
    </div>
  );
};
