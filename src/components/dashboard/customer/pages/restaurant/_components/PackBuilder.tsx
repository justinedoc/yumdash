import React from "react";
import SecondaryButton from "./SecondaryButton";
import { Plus } from "lucide-react";
import { PackItem } from "./Delivery";
import { formatMoney } from "@/lib/formatMoney";

type PackBuilderProps = {
  items: PackItem[];
  onHandleDecrementQuantity: (itemId: number) => void;
  onHandleIncrementQuantity: (itemId: number) => void;
};

const PackBuilder: React.FC<PackBuilderProps> = ({
  items,
  onHandleDecrementQuantity,
  onHandleIncrementQuantity,
}) => {
  const handleAddToPack = () => {
    alert("handling add to pack");
  };

  const handleDuplicatePack = () => {
    alert("Pack duplicated!");
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="my-4 flex items-center justify-between">
          <div className="text-sm">
            <div className="font-medium">{item.name}</div>
            <p className="text-[#A5A5A5]">
              {formatMoney(item.price, { decimals: 0 })}
            </p>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center rounded-full bg-gray-200">
            <button
              className="rounded-l-full bg-gray-200 px-2 hover:bg-gray-300"
              onClick={() => {
                if (item.quantity > 1) onHandleDecrementQuantity(item.id);
              }}
            >
              -
            </button>
            <span className="min-w-[2rem] text-center text-xs">
              {item.quantity}
            </span>
            <button
              className="rounded-r-full bg-gray-200 px-2 hover:bg-gray-300"
              onClick={() => onHandleIncrementQuantity(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Action buttons */}
      <div className="flex justify-between">
        <SecondaryButton
          className="border bg-transparent text-xs text-black"
          onClick={handleAddToPack}
          icon={<Plus size={14} />}
          label="Add to this pack"
        />

        <SecondaryButton
          className="border bg-transparent text-xs text-black"
          onClick={handleDuplicatePack}
          label="Duplicate pack"
        />
      </div>
    </>
  );
};

export default PackBuilder;
