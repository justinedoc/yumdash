import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import PreciseLocation from "./PreciseLocation";
import useLocationContext from "../hooks/useLocationContext";
import { KeyboardEvent, useState } from "react";
import { toast } from "sonner";

function AddressManager() {
  const [address, setAddress] = useState<string>("");
  const { location, handleLocationChange } = useLocationContext();

  /**
   * Performs validation and saves the address.
   */
  const saveAddress = () => {
    if (!address && !location) {
      toast.error("Please enter a valid address");
      return;
    }
    handleLocationChange(address || location);
    toast.success("Address saved successfully");
    setAddress("");
  };

  /**
   * Handles the Enter key in the input field.
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveAddress();
    }
  };

  /**
   * Handles the click event on the Save button.
   */
  const handleClick = () => {
    saveAddress();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Address</DialogTitle>
      </DialogHeader>

      <section
        id="search"
        className="relative bg-gray-100 w-full max-w-xl rounded-md mt-3 shadow-sm"
      >
        <input
          onKeyDown={handleKeyDown}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Input your location"
          title="Press Enter to search"
          aria-label="Input your location"
          className="w-full px-4 py-3 pl-10 text-sm bg-transparent focus:outline-0 focus:ring focus:ring-secondary/30 rounded-md transition-colors duration-200"
        />
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        />
      </section>

      <DialogDescription className="text-xs mb-0">
        To update your address, simply enter your new location and click the
        Save button.
      </DialogDescription>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">{location}</h3>
        <PreciseLocation />
      </div>

      <DialogFooter className="flex justify-end mt-4">
        {/* Using `asChild` to avoid extra markup if your DialogTrigger supports it */}
        <DialogTrigger asChild>
          <Button
            onClick={handleClick}
            className="secondary-grad-bg md:text-sm text-base py-3 px-6 w-full md:w-auto"
          >
            Save
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddressManager;
