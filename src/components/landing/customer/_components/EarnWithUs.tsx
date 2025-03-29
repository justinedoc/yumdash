import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import carImg from "@/assets/images/car.png";
import vendorCookImg from "@/assets/images/cook.png";
import { useNavigate } from "react-router";

// Background images for each tab
import VENDOR_BG_IMAGE from "@/assets/images/vendor-earn-with-us-bg.png";
import RIDER_BG_IMAGE from "@/assets/images/earn-with-us-bg.png";

type ActiveTab = "vendor" | "rider";

function EarnWithUs({ viewAs = "vendor" }: { viewAs?: ActiveTab }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>(viewAs);
  const isVendorActive = activeTab === "vendor";
  const navigate = useNavigate();

  const buttonStyles =
    "rounded-full border-secondary border-2 bg-white/40 text-black text-md p-5 cursor-pointer hover:text-white";

  const backgroundImage = isVendorActive ? VENDOR_BG_IMAGE : RIDER_BG_IMAGE;

  // Navigation callback for the article button based on the active tab.
  const handleArticleButtonClick = () => {
    if (isVendorActive) {
      navigate("/vendor/signup");
      return;
    }
    navigate("/");
  };

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={cn("relative bg-cover bg-center pt-10")}
    >
      {/* Header section with title and tab buttons */}
      <header className="text-hero absolute flex w-full flex-col items-center gap-5">
        <h1
          className={cn(
            "text-3xl",
            isVendorActive ? "text-primary" : "text-[#013929]",
          )}
        >
          Earn With Yumdash
        </h1>
        <div className="space-x-2 font-sans">
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
      <main className="flex flex-col-reverse items-center justify-between pt-[9rem] md:flex-row md:pt-0 md:pr-20">
        <div>
          <img
            src={activeTab === "rider" ? carImg : vendorCookImg}
            alt={
              activeTab === "rider"
                ? "Rider on the road"
                : "Vendor preparing food"
            }
            className="w-[35rem] 2xl:w-[40rem]"
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
    <article className="h-full w-full space-y-3 px-4 md:mt-26 md:max-w-[40%] md:px-0 2xl:max-w-[30%]">
      <h1
        className={cn(
          "text-hero text-2xl font-semibold",
          isVendorActive ? "text-primary" : "text-[#003324]",
        )}
      >
        {title}
      </h1>
      <p className="font-light text-white">{children}</p>
      <Button
        disabled={!isVendorActive}
        onClick={onButtonClick}
        className={cn("w-full rounded-full p-5 md:w-48", {
          "border-secondary text-secondary border bg-emerald-50 p-4":
            !isVendorActive,
        })}
      >
        {btnText}
      </Button>
    </article>
  );
}

export default EarnWithUs;
