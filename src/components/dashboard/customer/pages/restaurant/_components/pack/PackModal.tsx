import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import tempFoodImage from "@/assets/images/temp/restaurant-food.png";
import PackForm from "./PackForm";
import { formatMoney } from "@/lib/formatMoney";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function PackModal() {
  const isMobile = useIsMobile();
  return (
    <DialogContent className="sm:max-w-2xl">
      <DialogHeader className="hidden">
        <DialogTitle>Citizen Chips Combo</DialogTitle>
        <DialogDescription>
          Build your pack by selecting items from the list below.
        </DialogDescription>
      </DialogHeader>

      <div className="flex h-[30rem] flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 overflow-y-scroll sm:w-[55%] md:pr-5">
          <PackForm />
          {isMobile && <SelectedItem />}
        </div>
        {!isMobile && <SelectedItem />}
      </div>
    </DialogContent>
  );
}

function SelectedItem() {
  return (
    <div className="flex flex-col gap-4 py-4 md:w-[45%] md:py-8">
      <div className="w-full flex-1 overflow-y-scroll">
        <div className="mx-auto h-50 w-50 overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover"
            src={tempFoodImage}
            alt="food image"
          />
        </div>

        <div className="mt-2 w-full">
          <h2 className="text-xl font-semibold">Citizen Chips Combo</h2>
          <span className="text-secondary text-xs font-extralight">
            {formatMoney(11500, { decimals: 0 })}
          </span>

          <p className="mt-1 text-xs text-gray-600">
            Craving a bit more? Upgrade to our meal in large size, for a larger
            pack of fries and a 50 cl drink.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center gap-4">
        <div className="flex h-7 w-24 items-center justify-between gap-1 rounded-sm border text-sm font-medium">
          <Button className="h-full" size="icon" variant="ghost">
            <Minus />
          </Button>
          <span>1</span>
          <Button className="h-full" variant="ghost" size="icon">
            <Plus />
          </Button>
        </div>

        <Button className="w-full text-white" variant="secondary">
          Add 1 for {formatMoney(11500, { decimals: 0 })}
        </Button>
      </div>
    </div>
  );
}

export default PackModal;
