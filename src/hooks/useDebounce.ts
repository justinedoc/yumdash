import { useEffect, useState } from "react";

export function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);
  return { debouncedValue };
}
