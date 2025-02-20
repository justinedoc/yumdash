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
import { useState } from "react";
import { toast } from "sonner";

function AddressManager() {
  const [address, setAddress] = useState("");
  const { location, handleLocationChange } = useLocationContext();

  function handleSaveAddress() {
    if (!address && !location) {
      toast.error("Please enter a valid address");
      return;
    }
    handleLocationChange(address || location);
    toast.success("Address saved successfully");
    setAddress("");
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Address</DialogTitle>
      </DialogHeader>
      <section
        id="search"
        className="relative bg-[#ECECEC] w-full max-w-xl rounded-md mt-3"
      >
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Input your location"
          title="Press Enter to search"
          aria-label="Input your location"
          className="w-full px-4 py-3 pl-10 text-sm bg-transparent focus:outline-none focus:ring-0 rounded-md"
        />
        <Search
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 dark:text-blue-300/40"
          aria-hidden="true"
        />
      </section>
      <DialogDescription className="text-xs">
        To update your address, simply enter your new location and click the
        Save button.
      </DialogDescription>
      <div className="space-y-2">
        <h3>{location}</h3>
        <PreciseLocation />
      </div>
      <DialogFooter className="flex justify-between w-full">
        <DialogTrigger className="flex w-full md:w-fit">
          <Button
            onClick={handleSaveAddress}
            className="secondary-grad-bg md:text-sm text-base py-5 w-full"
          >
            Save
          </Button>
        </DialogTrigger>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddressManager;
