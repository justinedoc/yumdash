import footerVector1 from "@/assets/images/Vector 12.png";
import footerVector2 from "@/assets/images/Vector 13.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function WhyUseOurPlatform() {
  return (
    <section className="bg-[#FEEACD] pb-44 relative overflow-hidden px-4 md:px-8 lg:px-16">
      <div className="py-16 relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Why Use Our Platform?
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mt-4">
          We are dedicated to helping your restaurant thrive in a competitive industry. Explore the reasons why creating your own food ordering website with us.
        </p>
      </div>
    
      {/* Container for Dark Section */}
      <section className="relative bg-[#211503] w-full max-w-[1440px] mx-auto rounded-t-[64px] overflow-hidden">
        {/* Background images positioned outside the content area */}
        <div className="absolute inset-0 z-0">
          <img
            className="absolute bottom-0 left-0 w-[60%]"
            src={footerVector2}
            alt="Decorative footer background"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-0 w-[60%]"
            src={footerVector1}
            alt="Decorative footer background"
            loading="lazy"
          />
        </div>
        
        {/* Content with padding */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center w-full sm:gap-10 gap-18 ">
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 w-full">
              {[
                {
                  title: "Reliable Support and Resources:",
                  desc: "We're here for you every step of the way. Count on our reliable support team and access valuable resources, ensuring you have the assistance and tools needed for success."
                },
                {
                  title: "Increased Visibility and Customer Base",
                  desc: "Partnering with us means your restaurant gains greater visibility and access to a wider customer base. Your dishes reach more hungry customers, increasing your potential for growth"
                },
                {
                  title: "Custom Branding",
                  desc: "We simplify order management, providing you with an intuitive system that streamlines the entire process. From order placement to delivery, it's hassle-free and efficient"
                },
                {
                  title: "Marketing and Promotional Opportunities",
                  desc: "Joining our platform opens doors to marketing and promotional opportunities. We help you market your restaurant effectively, allowing you to attract new customers and boost your brand's presence"
                }
              ].map((box, index) => (
                <div
                  key={index}
                  className="w-full h-[164px] bg-transparent rounded-[16px] border-r border-white/20 px-10 py-6 flex flex-col justify-center text-white text-center"
                >
                  <h3 className="text-lg font-semibold">{box.title}</h3>
                  <p className="text-sm opacity-80">{box.desc}</p>
                </div>
              ))}
            </div>
      

            <Link to={"/login"}>
            <Button className="px-7 py-5 font-bold rounded-full bg-primary shadow-none text-white">
            Register Now
            </Button>
          </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WhyUseOurPlatform;