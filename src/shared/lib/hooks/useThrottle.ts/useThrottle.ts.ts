import { useCallback, useRef } from "react";

// для совершения одного события в промежуток времени
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback(() => {
    if (!throttleRef.current) {
      callback();
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
