import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DeliveryActions() {
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
        <Select>
          <SelectTrigger className="rounded-sm">
            <SelectValue placeholder="Address" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="address1">Your address</SelectItem>
          </SelectContent>
        </Select>
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
