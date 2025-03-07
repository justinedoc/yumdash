import FoodSlider from "./FoodSlider";
import Navbar from "./Navbar";
import food from "@/assets/icons/food.svg";

function Hero() {
  return (
    <section className="bg-secondary">
      <Navbar />
      <div className="pt-[8rem] md:pt-[10rem] py-6 md:px-0 px-2 text-center text-hero relative">
        <div className="bg-primary h-70 w-full absolute bottom-0 left-0" />

        <h1 className="flex justify-center gap-x-3 flex-wrap items-center md:text-5xl text-[2rem] text-white md:w-full mx-auto w-[18rem]">
          <span className="text-wrap">Discover & Order </span>
          <span>
            <span>Fr</span>
            <img
              src={food}
              alt="o"
              className="md:w-10 w-7 inline-block"
              loading="lazy"
            />
            <span>m The Best</span>
          </span>
        </h1>
        <h1 className="flex justify-center items-center md:text-5xl text-3xl text-white">
          Restaurants At Your Convenience.
        </h1>
        <FoodSlider />
      </div>
    </section>
  );
}

export default Hero;
