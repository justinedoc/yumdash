import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function NewsLetter() {
  const imgPath = (side: "left" | "right"): string =>
    `/src/assets/images/newsletter-${side}.png`;
  return (
    <section className="min-h-96 w-[90%] relative mx-auto bg-[#004834] rounded-b-[3.5rem] pt-10 mb-15">
      <form className="text-white p-12 w-full flex flex-col items-center gap-4">
        <h1 className="text-4xl text-hero">
          Stay Updated For Exciting Updates!
        </h1>
        <p className="text-sm text-gray-200 md:max-w-[50%] text-center text-pretty font-extralight">
          {" "}
          For mouthwatering news, delicious deals, and exclusive offers? Join
          our newsletter to satisfy your cravings. Be the first to know about
          our featured restaurants, special promotions, and tasty surprises.
        </p>

        <div className="bg-white h-14 w-full md:w-[50%] rounded-full flex gap-2 z-10 p-1 items-center focus-within:ring ring-primary">
          <input
            type="text"
            placeholder="Email here"
            className="h-full text-gray-900 pl-5 flex-1 rounded-full outline-0"
          />
          <Button className="rounded-full size-12">
            <ArrowRight size={25} />
          </Button>
        </div>
      </form>

      <div className="flex justify-between w-full absolute bottom-0">
        <img className="md:w-[25rem]" src={imgPath("left")} alt="leaf" />
        <img className="md:w-[25rem]" src={imgPath("right")} alt="leaf" />
      </div>
    </section>
  );
}

export default NewsLetter;
