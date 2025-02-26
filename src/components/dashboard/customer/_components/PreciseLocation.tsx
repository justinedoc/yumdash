import { useState, useCallback, JSX } from "react";
import { Button } from "@/components/ui/button";
import useLocationContext from "../hooks/useLocationContext";
import { toast } from "sonner";
import { getLocationFromCoordinates } from "../../utils/getLocation";

function getCurrentPositionAsync(): Promise<GeolocationPosition> {
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function PreciseLocation(): JSX.Element {
  const { handleLocationChange } = useLocationContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchLocation = useCallback(async (): Promise<void> => {
    if (!("geolocation" in navigator)) {
      toast.error("Geolocation is not supported in your browser.");
      return;
    }

    setIsLoading(true);
    try {
      const position = await getCurrentPositionAsync();
      const { latitude, longitude } = position.coords;
      const formattedAddress = await getLocationFromCoordinates(
        latitude,
        longitude
      );

      if (formattedAddress) {
        handleLocationChange(formattedAddress);
      } else {
        toast.error("We couldn't determine your address");
      }
    } catch (error) {
      toast.error(
        `Error: ${
          error instanceof Error ? error.message : "Unknown error occurred"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  }, [handleLocationChange]);

  return (
    <Button variant={"ghost"} onClick={handleFetchLocation} disabled={isLoading} className="text-gray-500 p-1">
      {isLoading ? "Loading..." : "Use Precise Location"}
    </Button>
  );
}

export default PreciseLocation;
