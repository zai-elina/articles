import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames("", {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose}/>
    </Suspense>
  </Modal>
);
