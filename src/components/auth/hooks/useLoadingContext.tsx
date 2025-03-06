import { useContext } from "react";
import { LoadingContext } from "../customer/_components/AnimateLoad";

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useLoadingContext must be used within a LoadingContext.Provider"
    );
  }
  return context;
}
