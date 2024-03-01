import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classNames("", {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={toogle}>
        {t("Язык")}
      </Button>
    </div>
  );
};
