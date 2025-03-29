import delivery from "@/assets/images/delivery.png";
import { Button } from "@/components/ui/button";
const Subscribe = () => {
  return (
    <div className="flex flex-col items-center bg-[#D5F6E6] p-5 text-[#013929] md:p-10">
      <div className="w-full items-center justify-between md:flex md:w-[80%]">
        <div className="py-10 md:w-1/2 md:max-w-[40%] md:py-20">
          <h1 className="text-hero mb-4 text-4xl md:text-3xl">
            Subscribe for weekly or monthly delivery
          </h1>
          <p className="my-2">
            You can choose to subscribe to subscribe to our weekly or monthly
            food ordering and delivering. Just subscribe and focus on other
            important stuffs. We gat you.
          </p>
          <Button
            disabled
            className="border-secondary text-secondary my-4 w-full rounded-full border bg-[#EFFFFB] py-2 text-sm md:my-2 md:w-[80%]"
          >
            Coming soon
          </Button>
        </div>
        <div className="mt-7 mb-[40px] md:mt-0 md:mb-0 md:w-1/3">
          <img
            src={delivery}
            className="w-[23rem] md:w-[25rem]"
            alt="delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
