import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import carImg from "@/assets/images/car.png";
import vendorCookImg from "@/assets/images/cook.png";
import { useState } from "react";

function EarnWithUs() {
  const [activeTab, setActiveTab] = useState<"vendor" | "rider">("vendor");
  const buttonStyles =
    "rounded-full border-secondary border-2 bg-white/40 text-black text-md p-5 cursor-pointer hover:text-white";
  const vendorActive = activeTab === "vendor";
  return (
    <section
      className={cn(
        "bg-[url('/src/assets/images/vendor-earn-with-us-bg.png')] bg-center bg-cover pt-10 relative",
        !vendorActive && " bg-[url('/src/assets/images/earn-with-us-bg.png')]"
      )}
    >
      <header className="text-hero w-full flex flex-col items-center gap-5 absolute">
        <h1
          className={cn(
            "text-3xl text-primary",
            !vendorActive && "text-[#013929]"
          )}
        >
          Earn With Yumdash
        </h1>

        <div className="font-sans space-x-2">
        <Button
            onClick={() => setActiveTab("rider")}
            className={cn(buttonStyles, !vendorActive && "bg-white")}
          >
            Earn as a Rider
          </Button>
          <Button
            onClick={() => setActiveTab("vendor")}
            className={cn(buttonStyles, vendorActive && "bg-white")}
          >
            Earn as a Vendor
          </Button>
        
        </div>
      </header>

      <main className="flex md:gap-44 items-center flex-col-reverse md:flex-row pt-[9rem] md:pt-0">
        <div>
          <img
            src={activeTab === "rider" ? carImg : vendorCookImg}
            alt="car image"
            className="w-[30rem]"

          />
        </div>

        {activeTab === "vendor" ? (
          <EarnWithUsArticle
            title="Create your E-resturant with ease"
            btnText="Join Our Vendors"
          >
            Create a free online presence for your business, reach more
            customers, make more sales and enjoy the ease in operating digital
            restuarant.
          </EarnWithUsArticle>
        ) : (
          <EarnWithUsArticle
            isVendorActive={false}
            title="Deliver and earn money"
            btnText="Coming Soon"
          >
            Be your own boss, make money in the most flexible way possible with
            your choice of vehicle, Either Bicycle, Car, Motorcycle or Truck.
            You are welcome.
          </EarnWithUsArticle>
        )}
      </main>
    </section>
  );
}

type EarnWithUsArticleType = {
  title: string;
  children: React.ReactNode;
  btnText: string;
  isVendorActive?: boolean;
};

function EarnWithUsArticle({
  title,
  children,
  btnText,
  isVendorActive = true,
}: EarnWithUsArticleType) {
  return (
    <article className="space-y-3 w-full md:max-w-[25rem] h-full md:mt-26 md:ml-15 px-4 md:px-0">
      <h1
        className={cn(
          "text-hero text-2xl font-semibold text-primary",
          !isVendorActive && "text-[#003324]"
        )}
      >
        {title}
      </h1>
      <p className="text-white font-light">{children}</p>
      <Button
        className={cn(
          "rounded-full w-full md:w-[70%] p-5",
          !isVendorActive &&
            "bg-emerald-50 border border-secondary text-secondary p-4"
        )}
      >
        {btnText}
      </Button>
    </article>
  );
}

export default EarnWithUs;
