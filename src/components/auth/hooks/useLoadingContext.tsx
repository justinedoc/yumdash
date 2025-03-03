import { useContext } from "react";
import { LoadingContext } from "../utils/AnimateLoad";

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(
      "useLoadingContext must be used within a LoadingContext.Provider"
    );
  }
  return context;
}
