import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import newsletterLeft from "@/assets/images/newsletter-left.png";
import newsletterRight from "@/assets/images/newsletter-right.png";

function NewsLetter() {
  return (
    <section className="relative mx-auto mb-7 min-h-96 w-[90%] rounded-b-[3.5rem] bg-[#004834] pt-6 md:mb-15 md:pt-10">
      <form className="flex w-full flex-col items-center gap-4 p-7 text-white md:p-12">
        <h1 className="text-hero text-3xl md:text-4xl">
          Stay Updated For Exciting Updates!
        </h1>
        <p className="text-center text-sm font-extralight text-pretty text-gray-200 md:max-w-[50%]">
          {" "}
          For mouthwatering news, delicious deals, and exclusive offers? Join
          our newsletter to satisfy your cravings. Be the first to know about
          our featured restaurants, special promotions, and tasty surprises.
        </p>

        <div className="ring-primary z-10 flex h-14 w-full items-center gap-2 rounded-full bg-white p-1 focus-within:ring md:w-[50%]">
          <input
            type="text"
            placeholder="Email here"
            className="h-full rounded-full pl-5 text-gray-900 outline-0 md:flex-1"
          />
          <Button className="size-10 rounded-full md:size-12">
            <ArrowRight size={25} />
          </Button>
        </div>
      </form>

      <div className="absolute bottom-0 hidden w-full justify-between md:flex">
        <img
          className="md:w-[25rem]"
          src={newsletterLeft}
          alt="leaf"
          loading="lazy"
        />
        <img
          className="md:w-[25rem]"
          src={newsletterRight}
          alt="leaf"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default NewsLetter;
