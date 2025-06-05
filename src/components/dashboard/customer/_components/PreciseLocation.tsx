import { useState, useCallback, JSX } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getLocationFromCoordinates } from "../../utils/getLocation";
import { useSetAddress } from "@/stores/LocationStore";

function getCurrentPositionAsync(): Promise<GeolocationPosition> {
  const options = {
    enableHighAccuracy: true,
    timeout: 9000,
    maximumAge: 0,
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function PreciseLocation(): JSX.Element {
  const handleAddressChange = useSetAddress();
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
        longitude,
      );

      if (!formattedAddress) {
        toast.error("We couldn't determine your address");
        return;
      }

      handleAddressChange(formattedAddress);
    } catch (error) {
      toast.error(
        `Error: ${
          error instanceof Error ? error.message : "Unknown error occurred"
        }`,
      );
    } finally {
      setIsLoading(false);
    }
  }, [handleAddressChange]);

  return (
    <Button
      variant={"ghost"}
      onClick={handleFetchLocation}
      disabled={isLoading}
      className="p-1 text-gray-500"
    >
      {isLoading ? "Loading..." : "Use Precise Location"}
    </Button>
  );
}

export default PreciseLocation;
