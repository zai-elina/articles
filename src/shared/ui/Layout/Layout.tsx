import { FC, MutableRefObject, ReactNode, useRef } from "react";
import classes from "./Layout.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getScrollByPath, scrollSaveActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle.ts/useThrottle.ts";

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
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useAppSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle(() => {
    if (wrapperRef.current) {
      dispatch(
        scrollSaveActions.setScrollPosition({
          position: wrapperRef.current.scrollTop,
          path: pathname,
        })
      );
    }
  }, 1000);

  return (
    <section
      ref={wrapperRef}
      className={classNames(classes.Layout, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && <div className={classes.trigger} ref={triggerRef} />}
    </section>
  );
};
