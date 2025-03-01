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
          newFavoriteState
        );
      } catch (error) {
        console.error("Error toggling favorite:", error);
      }
    });
  };

  return (
    <div className="flex items-center border border-[#0F5D8F29] rounded-sm relative p-2">
      <div className="flex flex-1 flex-col pr-3">
        <Button
          onClick={() => handleFavorite(food)}
          size={"icon"}
          className={cn(
            "mb-1 rounded-full bg-white p-2 shadow-sm transition-colors",
            isPending ? "opacity-50" : "hover:bg-gray-50"
          )}
        >
          <HeartIcon
            className={cn(
              "w-5 h-5 transition-colors",
              food.favourite
                ? "fill-orange-400 text-orange-400"
                : "text-gray-400"
            )}
          />
        </Button>
        <h1 className="font-semibold text-lg">{food.name}</h1>
        <p className="text-gray-400 text-xs my-2">{food.description}</p>
        <span className="font-light text-secondary">
          {formatMoney(food.price, { decimals: 0 })}
        </span>

        <Button className="w-fit secondary-grad-bg mt-2" size={"sm"}>
          Buy Now
        </Button>
      </div>
      {/* Food image  */}
      <div className="w-26 h-28 overflow-hidden rounded-md">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default RestaurantFoodCard;
