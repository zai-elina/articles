import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nTest from "shared/config/i18n/i18nTest";

export const renderWithTranslation = (component: ReactNode) => {
  return render(<I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>);
};
