import { FC, PropsWithChildren, createContext, useState } from "react";

import { modalOptions } from "../data/mock";

type HandleModalSelection = (modal: typeof modalOptions[number]) => void;

export const AiModalsContext = createContext(
  {} as {
    handleModalSelection: HandleModalSelection;
    selectedModal: typeof modalOptions[number];
  }
);

export const AiModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedModal, setSelectedModal] = useState(modalOptions[0]);

  const handleModalSelection: HandleModalSelection = (modal) =>
    setSelectedModal(modal);

  return (
    <AiModalsContext.Provider
      value={{
        selectedModal,
        handleModalSelection,
      }}
    >
      {children}
    </AiModalsContext.Provider>
  );
};
