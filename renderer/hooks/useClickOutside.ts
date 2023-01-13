import { useEffect, RefObject, useCallback } from "react";

const useClickOutside = (
  popperRef: RefObject<HTMLElement>,
  callback: () => void,
  elementRef?: RefObject<HTMLElement>
) => {
  const handleEvent = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (
        !popperRef.current?.contains(event.target as Node) &&
        elementRef &&
        !elementRef?.current?.contains(event.target as Node)
      ) {
        callback();
      }
    },
    [popperRef, elementRef, callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleEvent);
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("contextmenu", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
      document.removeEventListener("contextmenu", handleEvent);
    };
  }, [handleEvent]);
};

export default useClickOutside;
