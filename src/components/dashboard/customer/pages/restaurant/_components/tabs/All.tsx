import RestaurantFoodList from "../RestaurantFoodList";
import SearchBar from "../SearchBar";

function All() {
  return (
    <main className="space-y-3">
      <SearchBar />
      <RestaurantFoodList />
    </main>
  );
}

export default All;
