function Hero() {
  return (
    <section className="bg-secondary">
     <div className="md:pt-[10rem] py-6 md:px-0 px-2 text-center text-hero">
        <h1 className="__young_serif flex justify-center items-center md:text-5xl text-[1.2rem] text-white">
          Discover & Order Fr
          <img src={"/src/assets/icons/food.svg"} alt="" className="md:w-10 w-3" />m The Best
        </h1>
        <h1 className="__young_serif flex justify-center items-center md:text-5xl text-[1.2rem] text-white">
          Restaurants At Your Convenience.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
