import { Link } from "react-router";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import One from "@/assets/images/Frame 33107.png";
import Two from "@/assets/images/Frame 43.png";
import Three from "@/assets/images/Frame 44.png";

function Hero() {
  return (
    <section className="bg-secondary relative overflow-hidden pb-44">
      <Navbar />

      <div className="text-hero relative w-full px-2 py-6 pt-[8rem] md:px-0 md:pt-[10rem]">
        <h1 className="slider-track flex items-center justify-center text-3xl text-white md:text-5xl">
          Yakoyo.Yumdash.com OurFood.Yumdash.com Yakoyo.Yumdash.com
          OurFood.Yumdash.com Yakoyo.Yumdash.com OurFood.Yumdash.com
          Yakoyo.Yumdash.com OurFood.Yumdash.com
        </h1>
      </div>

      <section className="relative z-10 px-4 py-16 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left content */}
            <div className="w-full lg:max-w-xl xl:max-w-2xl">
              <div className="mb-4 inline-block rounded-2xl border-[0.5px] border-[#616262] bg-[#1e765e] px-4 py-2 text-sm font-medium text-white shadow-lg">
                Join Our Network of Restaurants
              </div>

              <h2 className="py-4 font-serif text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
                Create Your Own Food Ordering Website in less than 5 minutes.
              </h2>

              <p className="pb-8 font-sans text-base text-white/90 md:pb-12 md:text-lg">
                Your all in one E-restaurant store that helps you digitalise all
                your food e-commerce needs, and grow your business. We save you
                cost and time. Set up your food store in less than 5 minutes.
              </p>

              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <Link to={"/register"} className="w-full sm:w-auto">
                  <Button className="text-primary w-full rounded-full bg-white px-5 py-4 font-semibold shadow-none hover:text-white md:px-7 md:py-5">
                    Register
                  </Button>
                </Link>
                <Link to={"/login"} className="w-full sm:w-auto">
                  <Button className="w-full rounded-full bg-amber-500 px-5 py-4 font-bold text-white shadow-none hover:text-white md:px-7 md:py-5">
                    Log in
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side with stacked photos - centered on mobile */}
            <div className="relative mt-8 flex h-64 w-full justify-center md:h-80 lg:-mt-12 lg:w-96 lg:justify-end">
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
                {/* Three photos stacked like cards - scaled down for smaller screens */}
                <div className="absolute top-0 right-0 left-0 h-56 w-56 rotate-6 transform overflow-hidden rounded-xl md:h-64 md:w-64 lg:right-0 lg:left-auto lg:h-72 lg:w-72 xl:h-96 xl:w-96">
                  <img
                    src={One}
                    alt="Food"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute top-6 right-6 left-6 z-10 h-56 w-56 -rotate-3 transform overflow-hidden rounded-xl md:top-8 md:h-64 md:w-64 lg:right-8 lg:left-auto lg:h-72 lg:w-72 xl:h-96 xl:w-96">
                  <img
                    src={Two}
                    alt="Food"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute top-10 right-3 left-3 z-20 h-56 w-56 rotate-12 transform overflow-hidden rounded-xl md:top-12 md:h-64 md:w-64 lg:right-4 lg:left-auto lg:h-72 lg:w-72 xl:h-96 xl:w-96">
                  <img
                    src={Three}
                    alt="Food"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-0 -bottom-48 z-30 hidden md:right-12 md:-bottom-64 md:block lg:-bottom-72">
                <Button className="bg-primary flex h-24 w-24 flex-col items-center justify-center rounded-full text-white shadow-lg md:h-28 md:w-28 lg:h-32 lg:w-32">
                  <span className="text-sm md:text-base">Join us</span>
                  <span className="text-lg font-bold md:text-xl">TODAY</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="absolute bottom-0 left-0 z-0 h-[130px] w-full border-none bg-[#FEEACD]"
        style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
          transform: "scaleY(1.05) translateY(-1px)",
        }}
      ></div>
    </section>
  );
}

export default Hero;
