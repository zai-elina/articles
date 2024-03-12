import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18nTest from "shared/config/i18n/i18nTest";

export interface ComponentRenderOptions {
  route?: string;
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = "/" } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
