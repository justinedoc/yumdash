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
import { KeyboardEvent, useState } from "react";
import { toast } from "sonner";
import { useAddresses, useSetAddress } from "@/stores/LocationStore";

function AddressManager() {
  const [address, setAddress] = useState("");
  const addresses = useAddresses();
  const handleAddressChange = useSetAddress();
  /**
   * Performs validation and saves the address.
   */
  const saveAddress = () => {
    if (!address && !addresses) {
      toast.error("Please enter a valid address");
      return;
    }
    handleAddressChange(address || addresses[0]);
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
        className="relative mt-3 w-full max-w-xl rounded-md border bg-gray-100"
      >
        <input
          onKeyDown={handleKeyDown}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Input your location"
          title="Press Enter to search"
          aria-label="Input your location"
          className="focus:ring-secondary/30 w-full rounded-md bg-transparent px-4 py-3 pl-10 text-sm transition-colors duration-200 focus:ring focus:outline-0"
        />
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
          aria-hidden="true"
        />
      </section>

      <DialogDescription className="mb-0 text-xs">
        To update your address, simply enter your new location and click the
        Save button.
      </DialogDescription>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">{addresses.at(0)}</h3>
        <PreciseLocation />
      </div>

      <DialogFooter className="mt-4 flex justify-end">
        {/* Using `asChild` to avoid extra markup if your DialogTrigger supports it */}
        <DialogTrigger asChild>
          <Button
            onClick={handleClick}
            className="secondary-grad-bg w-full px-6 py-3 text-base md:w-auto md:text-sm"
          >
            Save
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddressManager;
