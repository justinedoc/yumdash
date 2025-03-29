import FoodSlider from "./FoodSlider";
import Navbar from "./Navbar";
import food from "@/assets/icons/food.svg";

function Hero() {
  return (
    <section className="bg-secondary">
      <Navbar />
      <div className="text-hero relative px-2 py-6 pt-[8rem] text-center md:px-0 md:pt-[10rem]">
        <div className="bg-primary absolute bottom-0 left-0 h-70 w-full" />

        <h1 className="mx-auto flex w-[18rem] flex-wrap items-center justify-center gap-x-3 text-[2rem] text-white md:w-full md:text-5xl">
          <span className="text-wrap">Discover & Order </span>
          <span>
            <span>Fr</span>
            <img
              src={food}
              alt="o"
              className="inline-block w-7 md:w-10"
              loading="lazy"
            />
            <span>m The Best</span>
          </span>
        </h1>
        <h1 className="flex items-center justify-center text-3xl text-white md:text-5xl">
          Restaurants At Your Convenience.
        </h1>
        <FoodSlider />
      </div>
    </section>
  );
}

export default Hero;
