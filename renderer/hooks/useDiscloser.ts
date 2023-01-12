import { useState } from "react";

const useDiscloser = (defaultState?: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState || false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => (isOpen ? close() : open());

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useDiscloser;
