import { useEffect, RefObject, useCallback } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleEvent = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleEvent);
    document.addEventListener("touchstart", handleEvent);
    return () => {
      document.removeEventListener("click", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [handleEvent]);
};

export default useClickOutside;
