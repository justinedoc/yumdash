import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import waveyBg from "@/assets/images/hero-wavy-bg.png";

function HeroCallToAction() {
  const navigate = useNavigate();
  return (
    <div className="relative items-center justify-center pb-6">
      <div className="flex justify-center text-center">
        <h1 className="px-5 md:max-w-[40%]">
          we've curated an exceptional selection of restaurants that are
          guaranteed to delight your taste buds. From savory to sweet, from
          local favorites to international cuisine, we've got it all!.
        </h1>
      </div>
      <div className="mt-5 block items-center justify-center pb-[2rem] text-center md:flex">
        <Button
          onClick={() => {
            navigate("/restaurants");
          }}
          className="bg-secondary text-md hover:bg-secondary/90 w-fit cursor-pointer rounded-full px-10 py-5 text-white md:font-semibold"
        >
          Order Now
        </Button>
      </div>
      <img
        src={waveyBg}
        alt="wavy"
        className="absolute bottom-0 left-0 -z-2 h-full w-full object-cover xl:h-auto"
      />
    </div>
  );
}

export default HeroCallToAction;
