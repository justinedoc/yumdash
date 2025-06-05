import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const availableFoods = [
  {
    name: "Citizen Chips Combo",
    items: [
      {
        name: "Citizen Chips",
        price: 5000,
        quantity: 0,
      },
      {
        name: "Citizen Burger",
        price: 2000,
        quantity: 0,
      },
      {
        name: "Citizen Drink",
        price: 1500,
        quantity: 0,
      },
    ],
  },
  {
    name: "drinks",
    items: [
      {
        name: "Coke",
        price: 500,
        quantity: 0,
      },
      {
        name: "Sprite",
        price: 500,
        quantity: 0,
      },
      {
        name: "Fanta",
        price: 500,
        quantity: 0,
      },
    ],
  },
  {
    name: "Side large",
    items: [
      {
        name: "Large Fries",
        price: 1000,
        quantity: 0,
      },
      {
        name: "Large Onion Rings",
        price: 1200,
        quantity: 0,
      },
      {
        name: "Large Salad",
        price: 800,
        quantity: 0,
      },
    ],
  },
  {
    name: "sauce",
    items: [
      {
        name: "Ketchup",
        price: 200,
        quantity: 0,
      },
      {
        name: "Mayonnaise",
        price: 200,
        quantity: 0,
      },
      {
        name: "BBQ Sauce",
        price: 200,
        quantity: 0,
      },
    ],
  },
];

function PackForm() {
  return (
    <form>
      {availableFoods.map((pack, index) => (
        <div key={index} className="mb-5 flex flex-col gap-2">
          <h3 className="text-md font-semibold">{pack.name}</h3>

          <label
            htmlFor={`pack-${index}`}
            className="block text-xs font-light text-gray-500"
          >
            Choose one{" "}
            <span className="rounded-full bg-[#FFEFD6] p-[0.20rem] text-black">
              Required
            </span>
          </label>

          {pack.items.map((item, itemIndex) => (
            <Button
              type="button"
              id={`pack-${index}-${itemIndex}`}
              className="w-full justify-between rounded-sm border-[#00674B29] p-4 px-1.5 text-sm font-light text-gray-700 shadow-none transition-all hover:bg-[#00674B29]/50 hover:text-[#00674B]"
              variant="outline"
            >
              {item.name}
              <span className="">
                <Plus className="rounded-full bg-[#00674B29] text-[#00674B]" />
              </span>
            </Button>
          ))}
        </div>
      ))}
    </form>
  );
}

export default PackForm;
