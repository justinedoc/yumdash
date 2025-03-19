import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function GettingStarted() {
  return (
    <section className="bg-[#EDFCF8] pb-44 relative overflow-hidden px-4 md:px-8 lg:px-16">
      <div className="py-16 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#02402F] leading-tight">
          Getting Started is Easy
        </h2>
      </div>
      <section className="relative bg-[#00674B] w-full max-w-[1440px] mx-auto overflow-hidden">
        <svg
          className="absolute bottom-[-40px] right-163 max-w-[80%] md:w-[806px] h-[30%]"
          viewBox="0 0 806 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "scaleX(-1)",
          }}
        >
          <path
            d="M0 180C0 100 200 30 403 30C606 30 806 100 806 180V250H0V180Z"
            fill="url(#leftGradient)"
          />
          <defs>
            <linearGradient id="leftGradient" x1="403" y1="30" x2="403" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0AE7AA" />
              <stop offset="1" stopColor="rgba(10, 231, 170, 0)" />
            </linearGradient>
          </defs>
        </svg>

    
        <svg
          className="absolute bottom-[-40px] left-163 max-w-[80%] md:w-[806px] h-[30%]"
          viewBox="0 0 806 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 180C0 100 200 30 403 30C606 30 806 100 806 180V250H0V180Z"
            fill="url(#rightGradient)"
          />
          <defs>
            <linearGradient id="rightGradient" x1="403" y1="30" x2="403" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0AE7AA" />
              <stop offset="1" stopColor="rgba(10, 231, 170, 0)" />
            </linearGradient>
          </defs>
        </svg>

        
        <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center w-full sm:gap-10 gap-18">
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 w-full">
              {[
                {
                  number: "1",
                  title: "Register with your essential information",
                  desc: "Begin by signing up on our platform and providing some essential information about your restaurant. We'll need details like your restaurant's name, location, contact information, etc.",
                },
                {
                  number: "2",
                  title: "Set up your menu and pricing.",
                  desc: "Create your restaurant's menu and set your pricing. You have the freedom to curate an enticing selection of dishes and set prices that match your vision.",
                },
                {
                  number: "3",
                  title: "Start receiving and fulfilling orders.",
                  desc: " Our platform seamlessly connects you with eager customers looking for your delicious offerings. As orders flow in, our user-friendly system makes order management a breeze.",
                },
                {
                  number: "4",
                  title: "Enjoy the benefits of our platform.",
                  desc: "With everything in place, you're now set to enjoy the array of benefits our platform offers. From increased visibility and access to a broader customer base to reliable support and resources, our goal is to ensure your restaurant's success.",
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className="w-full h-auto min-h-[164px] bg-transparent rounded-[16px] px-4 sm:px-10 py-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
                >
                
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#F49200] bg-transparent flex items-center justify-center text-[#F49200] font-bold text-xl sm:text-2xl mb-2 sm:mb-0 sm:mt-1">
                    {box.number}
                  </div>
                  
           
                  <div className="flex flex-col text-white gap-2 sm:gap-4">
                    <h3 className="text-lg font-semibold">{box.title}</h3>
                    <p className="text-sm opacity-80">{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to={"/login"} className="mt-10">
              <Button className="px-7 py-5 font-bold rounded-full text-white bg-amber-500 shadow-none hover:text-white">
                Join us today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default GettingStarted;