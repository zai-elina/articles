import { StateSchema } from "app/providers/StoreProvider";
import { getScroll } from "../getScroll/getScroll";
import { createSelector } from "@reduxjs/toolkit";

export const getScrollByPath = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
