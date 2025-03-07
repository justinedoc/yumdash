import { useContext } from "react";
import { AuthStateContext } from "../Layout";

export function useAuthStateContext() {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error(
      "useAuthStateContext must be used within a AuthStateProvider."
    );
  }
  return context;
}
