import { FC, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routing";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "widgets/PageLoader";
import { useTheme } from "./providers/ThemeProvider";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
