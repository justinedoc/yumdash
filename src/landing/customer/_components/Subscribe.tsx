import delivery from "@/assets/images/delivery.png";
import { Button } from "@/components/ui/button";
const Subscribe = () => {
  return (
    <div className="bg-[#D5F6E6] text-[#013929] p-5 md:p-10">
      <div className="md:flex items-center w-full md:w-[80%] mx-auto">
        <div className="md:w-1/2 md:py-20 py-10 ">
          <h1 className="text-3xl mb-4 text-hero">
            Subscribe for weekly or <br /> monthly delivery
          </h1>
          <p className="my-2">
            You can choose to subscribe to subscribe to our weekly or <br />{" "}
            monthly food ordering and delivering. Just subscribe and <br />{" "}
            focus on other important stuffs. We gat you.
          </p>
          <Button className="bg-[#EFFFFB] border border-secondary py-2 w-full md:w-[70%] rounded-full text-sm text-secondary my-4 md:my-2">
            Coming soon
          </Button>
        </div>
        <div className="md:w-1/3 md:mt-0 mt-7 mb-[40px] md:mb-0">
          <img
            src={delivery}
            className="md:mx-48  md:w-[25rem] w-[23rem]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
