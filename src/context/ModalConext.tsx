import React, { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  isAddModalOpen: boolean;
  closeAddModal: () => void;
  openAddModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  isAddModalOpen: false,
  closeAddModal: () => {},
  openAddModal: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const closeAddModal = () => setIsAddModalOpen(false);
  const openAddModal = () => setIsAddModalOpen(true);

  return (
    <ModalContext.Provider
      value={{ isAddModalOpen, closeAddModal, openAddModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
