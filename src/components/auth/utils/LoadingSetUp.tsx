import { createContext, useState } from "react";

export const LoadingContext = createContext<
  | {
      isLoading: boolean;
      handleLoading: (event: "start" | "end") => void;
    }
  | undefined
>(undefined);

export function LoadingRoutes({ el }: { el: React.ReactElement }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (event: "start" | "end") => {
    setIsLoading(event === "start");
  };
  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {el}
    </LoadingContext.Provider>
  );
}
