import { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t("Главная")}
    </div>
  );
};

export default MainPage;
