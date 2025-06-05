import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import AddressManager from "./AddressManager";
import { Button } from "@/components/ui/button";
import AddressSelector from "./AddressSelector";
import { useAddresses } from "@/stores/LocationStore";

function AddressesModal() {
  const addresses = useAddresses();
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="py-5 text-center">Delivery Address</DialogTitle>
        <DialogDescription>Click on the radio buttons to select an address</DialogDescription>
      </DialogHeader>

      {/* Delivery address comp  */}
      <AddressSelector />

      <DialogFooter className="w-full flex-col justify-center sm:flex-col">
        {/* Choose location and close dialog  */}
        <DialogTrigger asChild>
          <Button
            disabled={addresses.length === 0}
            className="secondary-grad-bg py-5"
          >
            Choose location
          </Button>
        </DialogTrigger>

        {/* Add new address  */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-secondary text-sm">
              Add new address <Plus />
            </Button>
          </DialogTrigger>
          <AddressManager />
        </Dialog>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddressesModal;
