import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function HeroCallToAction() {
  const navigate = useNavigate();
  return (
    <>
      <div className="md:main_wavy items-center justify-center bg-primary md:bg-transparent">
        <div className="md:px-[8rem] pt-10 text-center flex justify-center">
          <h1 className="mx-5 md:mx-0 md:mt-[7rem] md:max-w-[50%]">
            we've curated an exceptional selection of restaurants that are
            guaranteed to delight your taste buds. From savory to sweet, from
            local favorites to international cuisine, we've got it all!.
          </h1>
        </div>
        <div className="items-center justify-center text-center mt-5 block md:flex pb-[4rem]">
          <Button
            onClick={() => {
              navigate("/restaurants");
            }}
            className="bg-secondary w-fit py-5 px-10 text-md md:font-semibold text-white rounded-full cursor-pointer hover:bg-secondary/90"
          >
            Order Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroCallToAction;
