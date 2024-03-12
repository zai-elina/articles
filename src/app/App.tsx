import { FC, Suspense, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routing";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "widgets/PageLoader";
import { Modal } from "shared/ui/Modal/Modal";

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <button onClick={() => setIsOpen(true)}>open</button>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          lorem
        </Modal>
      </Suspense>
    </div>
  );
};

export default App;
