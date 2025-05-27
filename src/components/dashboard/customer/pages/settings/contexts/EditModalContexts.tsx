/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const EditModalContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: (isOpen: boolean) => void;
    }
  | undefined
>(undefined);

export function EditModalContextProvider({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <div>
      <EditModalContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </EditModalContext.Provider>
    </div>
  );
}
