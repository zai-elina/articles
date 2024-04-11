import { FC, useCallback } from "react";
import classes from "./EditableProfileCardHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "features/EditableProfileCard";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";

export const EditableProfileCardHeader: FC = () => {
  const { t } = useTranslation("profile");
  const authData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);
  const isEditable = authData?.id === profileData?.id;
  const readonly = useAppSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classes.EditableProfileCardHeader}>
      <Text title={t("Профиль")} />
      {isEditable && (
        <div className={classes.btnWrapper}>
          {readonly ? (
            <Button
              onClick={onEdit}
              className={classes.editButton}
              theme={ButtonTheme.OUTLINE}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <>
              <Button
                onClick={onCancelEdit}
                className={classes.editButton}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t("Отменить")}
              </Button>
              <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                {t("Сохранить")}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
