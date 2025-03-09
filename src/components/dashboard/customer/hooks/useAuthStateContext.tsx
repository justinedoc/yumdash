import { createContext, useContext } from "react";

export const AuthStateContext = createContext<
  | {
      isLoggedIn: boolean;
    }
  | undefined
>(undefined);

export function useAuthStateContext() {
  const context = useContext(AuthStateContext);

  if (!context) {
    throw new Error(
      "useAuthStateContext must be used within a AuthStateProvider."
    );
  }
  return context;
}
