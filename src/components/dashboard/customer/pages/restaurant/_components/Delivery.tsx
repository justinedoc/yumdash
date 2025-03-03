import { Plus, Trash2 } from "lucide-react";
import SecondaryButton from "./SecondaryButton";
import PackBuilder from "./PackBuilder";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DeliveryActions from "./DeliveryActions";
import DeliveryItemsSummary from "./DeliveryItemsSummary";
import { useState } from "react";

export type PackItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const initialItems: PackItem[] = [
  { id: 1, name: "Citizen Chips Combo", price: 11500, quantity: 1 },
  { id: 2, name: "Chi Exotic", price: 2500, quantity: 1 },
  { id: 3, name: "Turkey", price: 2500, quantity: 1 },
  { id: 4, name: "Pack", price: 150, quantity: 1 },
];

function DeliveryTab() {
  const [items, setItems] = useState<PackItem[]>(initialItems);

  const handleIncrementQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <div>
      <SecondaryButton
        className="ml-auto"
        icon={<Plus size={14} />}
        label="Add another pack"
        onClick={() => console.log("add another pack clicked")}
      />

      <div className="border border-dashed border-[#A5A5A5] py-3 px-2 rounded-sm my-2">
        {/* Pack Box header  */}
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Pack 1</h2>
          <Button
            size={"icon"}
            className="text-red-500 hover:bg-red-500 hover:text-white transition-all bg-[#FF3B3029] rounded-full"
          >
            <Trash2 />
          </Button>
        </div>

        <PackBuilder
          items={items}
          onHandleIncrementQuantity={handleIncrementQuantity}
          onHandleDecrementQuantity={handleDecrementQuantity}
        />
      </div>

      <Separator />

      <DeliveryActions />

      <Separator />

      <DeliveryItemsSummary items={items} />

      <div className="my-6 space-y-3">
        <Button className="w-full secondary-grad-bg rounded-sm">
          Proceed To Checkout
        </Button>
        <Button className="text-red-500 hover:bg-red-500 hover:text-white transition-all bg-[#FF3B3029] w-full">
          Clear Order
        </Button>
      </div>
    </div>
  );
}

export default DeliveryTab;
