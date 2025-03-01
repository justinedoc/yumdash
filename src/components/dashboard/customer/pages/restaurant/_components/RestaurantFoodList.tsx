import { foods } from "../../../data/temp/foods";
import ResturantFoodCard from "./ResturantFoodCard";

function RestaurantFoodList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {foods.map((food) => (
        <ResturantFoodCard key={food.id} food={food} />
      ))}
    </section>
  );
}

export default RestaurantFoodList;
