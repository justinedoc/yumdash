/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LatLngExpression } from "leaflet";
import React, {
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { toast } from "react-toastify";
import { useDebounce } from "@/lib/useDebounce";

// -------------------------------
// AddressToMap Component
// -------------------------------
interface AddressToMapProps {
  className?: string;
  children: ReactElement<{
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (
      e:
        | React.KeyboardEvent<HTMLInputElement>
        | React.MouseEvent<HTMLSpanElement>,
    ) => void;
    ref?: React.Ref<HTMLInputElement>;
  }>;
  onCoordinatesChange?: (coords: { lng: number; lat: number }) => void;
  onStatusChange?: (address: string) => void;
}

export const AddressToMap: React.FC<AddressToMapProps> = ({
  className = "",
  children,
  onCoordinatesChange,
  onStatusChange,
}) => {
  const [center, setCenter] = useState<LatLngExpression>([
    6.4550575, 3.3941795,
  ]);
  const [marker, setMarker] = useState<LatLngExpression | null>(null);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { debouncedValue } = useDebounce(query);

  // Fix Leaflet default icon
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  const performSearch = async () => {
    const term = debouncedValue.trim();
    if (term.length < 3) {
      toast.error("Enter at least 3 characters");
      return;
    }
    if (!navigator.onLine) {
      toast.error("Offline: check your connection");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          term,
        )}`,
      );
      if (!res.ok) throw new Error("Fetch failed");

      const results: Array<{ lat: string; lon: string; display_name: string }> =
        await res.json();
      if (!results.length) {
        toast.error("Location not found");
        return;
      }

      const { lat, lon, display_name } = results[0];
      const coords: [number, number] = [parseFloat(lat), parseFloat(lon)];
      setCenter(coords);
      setMarker(coords);
      setAddress(display_name);

      onCoordinatesChange?.({ lat: coords[0], lng: coords[1] });
      onStatusChange?.(display_name);
    } catch (err: any) {
      toast.error(err.message || "Error fetching location");
    } finally {
      setLoading(false);
      setQuery("");
      inputRef.current?.blur();
    }
  };

  const handleKey = async (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLSpanElement>,
  ) => {
    if ("key" in e && e.key !== "Enter") return;
    await performSearch();
  };

  // Inject input props into child
  const inputChild = cloneElement(children, {
    ref: inputRef,
    value: query,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    onKeyDown: handleKey,
  });

  return (
    <div className={className}>
      <div className="relative mb-4 w-full rounded bg-gray-100">
        {inputChild}
        <span
          className="text-secondary absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer font-semibold"
          onClick={handleKey}
        >
          Find
        </span>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <Spinner size={40} />
        </div>
      ) : (
        <MapContainer center={center} zoom={10} className="h-64 w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {marker && (
            <Marker position={marker}>
              <Popup>
                <strong>{address}</strong>
                <br />
                {Array.isArray(marker) ? (
                  <>
                    Lat: {marker[0].toFixed(4)}, Lng: {marker[1].toFixed(4)}
                  </>
                ) : (
                  "Coordinates unavailable"
                )}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
};

// Simple spinner component
const Spinner: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-label="Loading"
  >
    <path
      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
