import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useState } from "react";

import AddressSelector from "../../../_components/AddressSelector";
import AddressManager from "../../../_components/AddressManager";
import { IoIosArrowDown } from "react-icons/io";

function DeliveryActions() {
  const [selectedAddress, setSelectedAddress] = useState("");

  function handleSelectAddress(addr: string) {
    setSelectedAddress(addr);
  }

  const addressSelectProps = { selectedAddress, handleSelectAddress };
  return (
    <div className="space-y-2 font-medium text-sm my-3">
      <DeliveryAction label="Promo Code">
        <Input
          type="text"
          placeholder="Your code here"
          className="rounded-sm"
        />
      </DeliveryAction>
      <DeliveryAction label="Deliver to">
        <Dialog>
          {/* Choose delivery address trigger  */}
          <DialogTrigger asChild>
            <Button variant={"ghost"} className="text-secondary">
              {selectedAddress
                ? selectedAddress.slice(0, 15) + " ..."
                : "Choose"}
              {selectedAddress && <IoIosArrowDown aria-hidden="true" />}
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center py-5">
                Delivery Address
              </DialogTitle>
              <DialogDescription>Select an address</DialogDescription>
            </DialogHeader>

            {/* Delivery address comp  */}
            <AddressSelector {...addressSelectProps} />

            <DialogFooter className="w-full flex-col sm:flex-col justify-center">
              {/* Choose location and close dialog  */}
              <DialogTrigger asChild>
                <Button className="secondary-grad-bg py-5">
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
              {/*  */}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DeliveryAction>

      <DeliveryAction label="Delivery Instructions">
        <Button variant={"ghost"} className="text-secondary">
          Add
        </Button>
      </DeliveryAction>
    </div>
  );
}

type DeliveryActionProps = {
  children: React.ReactNode;
  label: string;
};

function DeliveryAction({ children, label }: DeliveryActionProps) {
  return (
    <div className="flex justify-between items-center gap-7">
      <h2 className="shrink-0 text-nowrap">{label}</h2>
      {children}
    </div>
  );
}

export default DeliveryActions;
