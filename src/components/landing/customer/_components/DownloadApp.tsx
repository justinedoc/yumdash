import { Button } from "@/components/ui/button";
import SectionHeader from "../ui/SectionHeader";

function DownloadApp() {
  return (
    <section className="py-6 px-16 flex justify-center items-center w-full overflow-x-hidden">
      <header className="text-hero max-w-[30rem] flex flex-col gap-3">
        <SectionHeader className="text-xl" text="Download our app today" />

        <h1 className="text-[#014734] text-5xl font-meduim leading-15">
          Get personalized experience
        </h1>
        <Button
          className="bg-emerald-50 border cursor-not-allowed shadow-none border-secondary text-secondary rounded-full w-[80%] py-4 font-sans"
          variant={"outline"}
        >
          Coming soon
        </Button>
      </header>

      <div className="w-full md:w-1/2">
        <img
          className="w-full md:w-[90%] md:ml-12 mx-auto"
          src={"/src/assets/images/mobile-app.png"}
          alt="Our mobile number"
        />
      </div>
    </section>
  );
}

export default DownloadApp;
