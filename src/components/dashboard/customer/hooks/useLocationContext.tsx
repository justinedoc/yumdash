import { createContext, useContext } from "react";

export const LocationContext = createContext<
  | {
      location: string;
      handleLocationChange: (location: string) => void;
    }
  | undefined
>(undefined);

function useLocationContext() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      "useLocationContext must be used within a LocationProvider."
    );
  }
  return context;
}

export default useLocationContext;
