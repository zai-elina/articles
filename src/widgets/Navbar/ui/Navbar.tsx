import { memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entities/User";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseModalLogin = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenModalLogin = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <div className={classes.links}>
          <Button theme={ThemeButton.BACKGROUND} onClick={onLogout}>
            {t("Выйти")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <Button theme={ThemeButton.BACKGROUND} onClick={onOpenModalLogin}>
          {t("Войти")}
        </Button>
      </div>

      {isAuthModalOpen && (
        <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModalLogin} />
      )}
    </div>
  );
});

Navbar.displayName = "Navbar";
