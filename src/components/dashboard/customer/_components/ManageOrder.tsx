import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

function ManageOrder() {
  return (
    <div className="md:max-w-[25rem] w-full my-7 md:my-0">
      <h1 className="text-black font-semibold text-xl mb-6 px-2">
        Manage my order
      </h1>
      <Separator />
      <p className="py-7 font-light text-sm px-2">
        The following actions are available for your order at this point.
      </p>
      <Separator />

      <OrderAction label="Cancel Order" />

      <Separator />

      <OrderAction label="Return your Order" />

      <Separator />

      <OrderAction isDisabled label="Reschedule delivery" />

      <Separator />
    </div>
  );
}

type OrderActionProp = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

function OrderAction({ label, onClick, isDisabled = false }: OrderActionProp) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className="px-2 flex justify-between w-full items-center py-6 font-semibold text-lg cursor-pointer hover:bg-gray-400/10 group disabled:pointer-events-none disabled:text-gray-300"
    >
      {label}
      <div className="size-10 bg-secondary rounded-full group-disabled:bg-gray-300 flex items-center justify-center text-white">
        <ChevronRight size={18} />
      </div>
    </button>
  );
}

export default ManageOrder;
