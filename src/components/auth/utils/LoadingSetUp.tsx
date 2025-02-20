import { createContext, useState } from "react";

export const LoadingContext = createContext<
  | {
      isLoading: boolean;
      handleLoading: (event: "start" | "end") => void;
    }
  | undefined
>(undefined);

export function AnimateLoad({ element }: { element: React.ReactElement }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (event: "start" | "end") => {
    setIsLoading(event === "start");
  };
  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {element}
    </LoadingContext.Provider>
  );
}
