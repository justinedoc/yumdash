import { useNavigate } from "react-router";

function HeroCallToAction() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main_wavy items-center justify-center">
        <div className="md:px-[23rem] text-center pt-[5rem] ">
          <h1 className="mx-5 md:mx-0 md:mt-[7rem]">
            we've curated an exceptional selection of restaurants that are
            guaranteed to delight your taste buds. From savory to sweet, from
            local favorites to international cuisine, we've got it all!.
          </h1>
        </div>
        <div className="items-center justify-center text-center mt-5 block md:flex pb-[4rem]">
          <button
            onClick={() => {
              navigate("/resturants");
            }}
            className="bg-secondary w-fit py-2 px-10 text-md md:font-semibold text-white rounded-full cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroCallToAction;
