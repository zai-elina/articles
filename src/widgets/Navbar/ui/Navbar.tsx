import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <Button theme={ThemeButton.BACKGROUND} onClick={onToggleModal}>
          {t("Войти")}
        </Button>
      </div>

      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        {t("Войти")}
      </Modal>
    </div>
  );
};
