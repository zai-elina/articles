/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback, useRef } from "react";

// для совершения одного события в промежуток времени
export function useDebonce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );
}
