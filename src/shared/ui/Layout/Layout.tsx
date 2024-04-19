import { FC, MutableRefObject, ReactNode, useRef } from "react";
import classes from "./Layout.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface LayoutProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const Layout: FC<LayoutProps> = ({
  className,
  children,
  onScrollEnd,
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(classes.Layout, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
