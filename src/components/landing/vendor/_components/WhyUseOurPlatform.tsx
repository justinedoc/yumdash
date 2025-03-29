import footerVector1 from "@/assets/images/Vector 12.png";
import footerVector2 from "@/assets/images/Vector 13.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function WhyUseOurPlatform() {
  return (
    <section className="relative overflow-hidden bg-[#FEEACD] px-4 pb-44 md:px-8 lg:px-16">
      <div className="relative z-10 py-16 text-center">
        <h2 className="text-2xl leading-tight font-bold text-gray-900 md:text-4xl">
          Why Use Our Platform?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 md:text-lg">
          We are dedicated to helping your restaurant thrive in a competitive
          industry. Explore the reasons why creating your own food ordering
          website with us.
        </p>
      </div>

      {/* Container for Dark Section */}
      <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-t-[64px] bg-[#211503]">
        {/* Background images positioned outside the content area */}
        <div className="absolute inset-0 z-0">
          <img
            className="absolute bottom-0 left-0 w-[60%]"
            src={footerVector2}
            alt="Decorative footer background"
            loading="lazy"
          />
          <img
            className="absolute right-0 bottom-0 w-[60%]"
            src={footerVector1}
            alt="Decorative footer background"
            loading="lazy"
          />
        </div>

        {/* Content with padding */}
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="flex w-full flex-col items-center gap-18 sm:gap-10">
            {/* Content Grid */}
            <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-10">
              {[
                {
                  title: "Reliable Support and Resources:",
                  desc: "We're here for you every step of the way. Count on our reliable support team and access valuable resources, ensuring you have the assistance and tools needed for success.",
                },
                {
                  title: "Increased Visibility and Customer Base",
                  desc: "Partnering with us means your restaurant gains greater visibility and access to a wider customer base. Your dishes reach more hungry customers, increasing your potential for growth",
                },
                {
                  title: "Custom Branding",
                  desc: "We simplify order management, providing you with an intuitive system that streamlines the entire process. From order placement to delivery, it's hassle-free and efficient",
                },
                {
                  title: "Marketing and Promotional Opportunities",
                  desc: "Joining our platform opens doors to marketing and promotional opportunities. We help you market your restaurant effectively, allowing you to attract new customers and boost your brand's presence",
                },
              ].map((box, index) => (
                <div
                  key={index}
                  className="flex h-[164px] w-full flex-col justify-center rounded-[16px] border-r border-white/20 bg-transparent px-10 py-6 text-center text-white"
                >
                  <h3 className="text-lg font-semibold">{box.title}</h3>
                  <p className="text-sm opacity-80">{box.desc}</p>
                </div>
              ))}
            </div>

            <Link to={"/login"}>
              <Button className="bg-primary rounded-full px-7 py-5 font-bold text-white shadow-none">
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
