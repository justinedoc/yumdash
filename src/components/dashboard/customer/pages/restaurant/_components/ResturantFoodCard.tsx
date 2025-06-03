import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import { Food } from "../../../data/temp/foods";
import { useTransition } from "react";
import { formatMoney } from "@/lib/formatMoney";

type RestaurantFoodCardProps = {
  food: Food;
};

function RestaurantFoodCard({ food }: RestaurantFoodCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleFavorite = (food: Food) => {
    if (isPending) return;
    startTransition(async () => {
      const newFavoriteState = !food.favourite;
      // TODO: update favorite state here
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log(
          "Favorite toggled for restaurant:",
          food.id,
          newFavoriteState,
        );
      } catch (error) {
        console.error("Error toggling favorite:", error);
      }
    });
  };

  return (
    <div className="relative flex cursor-pointer items-center rounded-sm border border-[#0F5D8F29] p-2 hover:-translate-y-0.5 transition-transform duration-200 ease-in-out hover:shadow-sm">
      <div className="flex flex-1 flex-col pr-3">
        <Button
          onClick={() => handleFavorite(food)}
          size={"icon"}
          className={cn(
            "mb-1 rounded-full bg-white shadow-sm transition-colors",
            isPending ? "opacity-50" : "hover:bg-gray-50",
          )}
        >
          <HeartIcon
            className={cn(
              "size-5 transition-colors",
              food.favourite
                ? "fill-orange-400 text-orange-400"
                : "text-gray-400",
            )}
          />
        </Button>
        <h1 className="text-lg font-semibold">{food.name}</h1>
        <p className="my-2 text-xs text-gray-400">
          {food.description.slice(0, 100)}...
        </p>
        <span className="text-secondary font-light">
          {formatMoney(food.price, { decimals: 0 })}
        </span>
      </div>
      {/* Food image  */}
      <div className="size-30 overflow-hidden rounded-md">
        <img
          src={food.image}
          alt={food.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default RestaurantFoodCard;
