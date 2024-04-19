import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "shared/ui/Layout/Layout";

const MainPage: FC = () => {
  const { t } = useTranslation();

  return <Layout>{t("Главная")}</Layout>;
};

export default MainPage;
