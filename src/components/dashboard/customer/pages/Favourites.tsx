import { Star } from "lucide-react";
import RestaurantList from "../_components/RestaurantsList";
import { restaurants } from "../data/temp/restaurants";
import RestaurantCard from "../_components/RestaurantsCard";

function Favourites() {
  return (
    <section className="p-4 md:p-6 bg-[#fafafa]">
      <RestaurantList
        icon={<Star className="stroke-none fill-primary" />}
        title="Your Favourites"
        render={restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      />
    </section>
  );
}

export default Favourites;
