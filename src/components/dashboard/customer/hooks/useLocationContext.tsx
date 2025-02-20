import { useContext } from "react";
import { LocationContext } from "../_components/Navbar";

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
