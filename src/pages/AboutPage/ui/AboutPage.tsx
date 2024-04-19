import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "shared/ui/Layout/Layout";

const AboutPage: FC = () => {
  const { t } = useTranslation("about");

  return <Layout>{t("О сайте")}</Layout>;
};

export default AboutPage;
