import { memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
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
      <header className={classNames(classes.Navbar, {}, [className])}>
        <div className={classes.links}>
          <Button theme={ButtonTheme.BACKGROUND} onClick={onLogout}>
            {t("Выйти")}
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <Button theme={ButtonTheme.BACKGROUND} onClick={onOpenModalLogin}>
          {t("Войти")}
        </Button>
      </div>

      {isAuthModalOpen && (
        <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModalLogin} />
      )}
    </header>
  );
});

Navbar.displayName = "Navbar";
