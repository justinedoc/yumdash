import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import carImg from "@/assets/images/car.png";
import vendorCookImg from "@/assets/images/cook.png";
import { useNavigate } from "react-router";

// Background images for each tab
const VENDOR_BG_IMAGE = "/src/assets/images/vendor-earn-with-us-bg.png";
const RIDER_BG_IMAGE = "/src/assets/images/earn-with-us-bg.png";

type ActiveTab = "vendor" | "rider";

function EarnWithUs() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("vendor");
  const isVendorActive = activeTab === "vendor";
  const navigate = useNavigate();

  // Common button styling for tab selectors
  const buttonStyles =
    "rounded-full border-secondary border-2 bg-white/40 text-black text-md p-5 cursor-pointer hover:text-white";

  // Determine the background image based on the active tab
  const backgroundImage = isVendorActive ? VENDOR_BG_IMAGE : RIDER_BG_IMAGE;

  // Navigation callback for the article button based on the active tab.
  const handleArticleButtonClick = () => {
    isVendorActive ? navigate("/vendor/signup") : navigate("/rider/signup");
  };

  return (
    <section
      className={cn(
        "bg-center bg-cover pt-10 relative",
        `bg-[url('${backgroundImage}')]`
      )}
    >
      {/* Header section with title and tab buttons */}
      <header className="text-hero w-full flex flex-col items-center gap-5 absolute">
        <h1
          className={cn(
            "text-3xl",
            isVendorActive ? "text-primary" : "text-[#013929]"
          )}
        >
          Earn With Yumdash
        </h1>
        <div className="font-sans space-x-2">
          <Button
            onClick={() => setActiveTab("vendor")}
            className={cn(buttonStyles, isVendorActive && "bg-white")}
          >
            Earn as a Vendor
          </Button>
          <Button
            onClick={() => setActiveTab("rider")}
            className={cn(buttonStyles, !isVendorActive && "bg-white")}
          >
            Earn as a Rider
          </Button>
        </div>
      </header>

      {/* Main content area displaying an image and article */}
      <main className="flex md:gap-44 items-center flex-col-reverse md:flex-row pt-[9rem] md:pt-0">
        <div>
          <img
            src={activeTab === "rider" ? carImg : vendorCookImg}
            alt={
              activeTab === "rider"
                ? "Rider on the road"
                : "Vendor preparing food"
            }
            className="w-[30rem]"
          />
        </div>

        <EarnWithUsArticle
          title={
            isVendorActive
              ? "Create your E-restaurant with ease"
              : "Deliver and earn money"
          }
          btnText={isVendorActive ? "Join Our Vendors" : "Coming Soon"}
          isVendorActive={isVendorActive}
          onButtonClick={handleArticleButtonClick}
        >
          {isVendorActive
            ? "Create a free online presence for your business, reach more customers, make more sales, and enjoy the ease of operating a digital restaurant."
            : "Be your own boss and earn money in the most flexible way possible with your choice of vehicle—whether it's a bicycle, car, motorcycle, or truck."}
        </EarnWithUsArticle>
      </main>
    </section>
  );
}

type EarnWithUsArticleProps = {
  title: string;
  children: React.ReactNode;
  btnText: string;
  isVendorActive?: boolean;
  onButtonClick?: () => void;
};

function EarnWithUsArticle({
  title,
  children,
  btnText,
  isVendorActive = true,
  onButtonClick,
}: EarnWithUsArticleProps) {
  return (
    <article className="space-y-3 w-full md:max-w-[25rem] h-full md:mt-26 md:ml-15 px-4 md:px-0">
      <h1
        className={cn(
          "text-hero text-2xl font-semibold",
          isVendorActive ? "text-primary" : "text-[#003324]"
        )}
      >
        {title}
      </h1>
      <p className="text-white font-light">{children}</p>
      <Button
        onClick={onButtonClick}
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
