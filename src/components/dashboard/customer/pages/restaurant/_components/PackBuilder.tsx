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
        <div key={item.id} className="flex items-center justify-between my-4">
          <div className="text-sm">
            <div className="font-medium">{item.name}</div>
            <p className="text-[#A5A5A5]">
              {formatMoney(item.price, { decimals: 0 })}
            </p>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center bg-gray-200 rounded-full">
            <button
              className="bg-gray-200 px-2 rounded-l-full hover:bg-gray-300"
              onClick={() => {
                item.quantity > 1 && onHandleDecrementQuantity(item.id);
              }}
            >
              -
            </button>
            <span className="min-w-[2rem] text-center text-xs">
              {item.quantity}
            </span>
            <button
              className="bg-gray-200 px-2 rounded-r-full hover:bg-gray-300"
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
          className="bg-transparent border text-black text-xs"
          onClick={handleAddToPack}
          icon={<Plus size={14} />}
          label="Add to this pack"
        />

        <SecondaryButton
          className="bg-transparent border text-black text-xs"
          onClick={handleDuplicatePack}
          label="Duplicate pack"
        />
      </div>
    </>
  );
};

export default PackBuilder;
