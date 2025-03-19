import { Link } from "react-router";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import One from "@/assets/images/Frame 33107.png";
import Two from "@/assets/images/Frame 43.png";
import Three from "@/assets/images/Frame 44.png";

function Hero() {
  return (
    <section className="bg-secondary pb-44 relative overflow-hidden">
      <Navbar />
          
      <div className="pt-[8rem] md:pt-[10rem] py-6 md:px-0 px-2 w-full text-hero relative">
        <h1 className="flex justify-center slider-track items-center md:text-5xl text-3xl text-white">
          Yakoyo.Yumdash.com OurFood.Yumdash.com Yakoyo.Yumdash.com OurFood.Yumdash.com Yakoyo.Yumdash.com OurFood.Yumdash.com Yakoyo.Yumdash.com OurFood.Yumdash.com
        </h1>
      </div>
      
      <section className="py-16 px-4 md:px-8 lg:px-16 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Left content */}
            <div className="w-full lg:max-w-xl xl:max-w-2xl">
              <div className="inline-block rounded-2xl bg-[#1e765e] border-[0.5px] border-[#616262] shadow-lg px-4 py-2 text-white text-sm font-medium mb-4">
                Join Our Network of Restaurants
              </div>
            
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-serif py-4">
                Create Your Own Food Ordering Website in less than 5 minutes.
              </h2>
              
              <p className="text-base md:text-lg text-white/90 font-sans pb-8 md:pb-12">
                Your all in one E-restaurant store that helps you digitalise all your food e-commerce needs, and grow your business. We save you cost and time. Set up your food store in less than 5 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link to={"/register"} className="w-full sm:w-auto">
                  <Button className="px-5 md:px-7 py-4 md:py-5 font-semibold rounded-full bg-white text-primary shadow-none hover:text-white w-full">
                    Register
                  </Button>
                </Link>
                <Link to={"/login"} className="w-full sm:w-auto">
                  <Button className="px-5 md:px-7 py-4 md:py-5 font-bold rounded-full text-white bg-amber-500 shadow-none hover:text-white w-full">
                    Log in
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right side with stacked photos - centered on mobile */}
            <div className="mt-8 lg:-mt-12 relative h-64 md:h-80 w-full lg:w-96 flex justify-center lg:justify-end">
              <div className="relative h-64 md:h-80 lg:h-96 w-64 md:w-80 lg:w-96">
                {/* Three photos stacked like cards - scaled down for smaller screens */}
                <div className="absolute left-0 lg:left-auto right-0 lg:right-0 top-0 w-56 md:w-64 lg:w-72 xl:w-96 h-56 md:h-64 lg:h-72 xl:h-96 rounded-xl transform rotate-6 overflow-hidden">
                  <img src={One} alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="absolute left-6 lg:left-auto right-6 lg:right-8 top-6 md:top-8 w-56 md:w-64 lg:w-72 xl:w-96 h-56 md:h-64 lg:h-72 xl:h-96 rounded-xl transform -rotate-3 overflow-hidden z-10">
                  <img src={Two} alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="absolute left-3 lg:left-auto right-3 lg:right-4 top-10 md:top-12 w-56 md:w-64 lg:w-72 xl:w-96 h-56 md:h-64 lg:h-72 xl:h-96 rounded-xl transform rotate-12 overflow-hidden z-20">
                  <img src={Three} alt="Food" className="w-full h-full object-cover" />
                </div>
              </div>
              
          
              <div className="absolute -bottom-48 md:-bottom-64 lg:-bottom-72 right-0 md:right-12 z-30 md:block hidden">
                <Button className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-primary text-white shadow-lg flex flex-col items-center justify-center">
                  <span className="text-sm md:text-base">Join us</span>
                  <span className="font-bold text-lg md:text-xl">TODAY</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
      <div 
        className="absolute w-full h-[130px] bottom-0 left-0 bg-[#FEEACD] z-0 border-none"
        style={{ 
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)",
          transform: "scaleY(1.05) translateY(-1px)" 
        }}
      ></div>
    </section>
  );
}

export default Hero;