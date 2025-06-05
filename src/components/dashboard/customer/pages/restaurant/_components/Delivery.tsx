import { Trash2 } from "lucide-react";
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

function Delivery() {
  const [items, setItems] = useState<PackItem[]>(initialItems);

  const handleIncrementQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrementQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item,
      ),
    );
  };

  return (
    <div>
      <div className="my-2 rounded-sm border border-dashed border-[#A5A5A5] px-2 py-3">
        {/* Pack Box header  */}
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Pack 1</h2>
          <Button
            size={"icon"}
            className="rounded-full bg-[#FF3B3029] text-red-500 transition-all hover:bg-red-500 hover:text-white"
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
        <Button className="secondary-grad-bg w-full rounded-sm">
          Proceed To Checkout
        </Button>
        <Button className="w-full bg-[#FF3B3029] text-red-500 transition-all hover:bg-red-500 hover:text-white">
          Clear Order
        </Button>
      </div>
    </div>
  );
}

export default Delivery;
