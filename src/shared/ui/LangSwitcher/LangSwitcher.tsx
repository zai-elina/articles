import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div className={classNames("", {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toogle}>
        {t(short ? "Короткий язык" : "Язык")}
      </Button>
    </div>
  );
});

LangSwitcher.displayName = "LangSwitcher";
