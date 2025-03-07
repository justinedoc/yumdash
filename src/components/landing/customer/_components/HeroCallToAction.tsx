import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import waveyBg from "@/assets/images/hero-wavy-bg.png";

function HeroCallToAction() {
  const navigate = useNavigate();
  return (
    <div className="items-center justify-center pb-6 relative">
      <div className="text-center flex justify-center">
        <h1 className="md:max-w-[40%] px-5">
          we've curated an exceptional selection of restaurants that are
          guaranteed to delight your taste buds. From savory to sweet, from
          local favorites to international cuisine, we've got it all!.
        </h1>
      </div>
      <div className="items-center justify-center text-center mt-5 block md:flex pb-[2rem]">
        <Button
          onClick={() => {
            navigate("/restaurants");
          }}
          className="bg-secondary w-fit py-5 px-10 text-md md:font-semibold text-white rounded-full cursor-pointer hover:bg-secondary/90"
        >
          Order Now
        </Button>
      </div>
      <img
        src={waveyBg}
        alt="wavy"
        className="absolute bottom-0 left-0 -z-2 xl:h-auto h-full w-full object-cover"
      />
    </div>
  );
}

export default HeroCallToAction;
