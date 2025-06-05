import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { IoIosArrowDown } from "react-icons/io";
import AddressesModal from "../../../_components/AddressesModal";
import { useActiveAddress } from "@/stores/LocationStore";
import { truncateChar } from "@/lib/truncateChar";

function DeliveryActions() {
  const activeAddress = useActiveAddress();
  return (
    <div className="my-3 space-y-2 text-sm font-medium">
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
              {activeAddress ? truncateChar(activeAddress, 15) : "Choose"}
              {activeAddress && <IoIosArrowDown aria-hidden="true" />}
            </Button>
          </DialogTrigger>

          <AddressesModal />
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
    <div className="flex items-center justify-between gap-7">
      <h2 className="shrink-0 text-nowrap">{label}</h2>
      {children}
    </div>
  );
}

export default DeliveryActions;
