import { createContext, useState } from "react";
import Loading from "../ui/Loading";

export const LoadingContext = createContext<
  | {
      isLoading: boolean;
      handleLoading: (event: "start" | "end") => void;
    }
  | undefined
>(undefined);

export function AnimateLoad({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (event: "start" | "end") => {
    setIsLoading(event === "start");
  };
  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {isLoading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
}
