import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <Button theme={ThemeButton.BACKGROUND} onClick={onOpenModal}>
          {t("Войти")}
        </Button>
      </div>

      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </div>
  );
};
