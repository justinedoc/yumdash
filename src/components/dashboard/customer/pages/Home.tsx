import RestaurantList from "../_components/ResturantList";

function Home() {
  return (
    <section className="p-5 bg-[#fafafa]">
      <h1 className="font-medium text-2xl">Hi Jane!</h1>
      <p className="text-sm text-gray-500">We are ready to take your order!</p>

      <RestaurantList />
    </section>
  );
}

export default Home;
