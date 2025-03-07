import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"ghost"} className="text-secondary">
              {"Choose"}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
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
