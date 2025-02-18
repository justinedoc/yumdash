import { Button } from "@/components/ui/button";
import SectionHeader from "../ui/SectionHeader";

function DownloadApp() {
  return (
    <section className="py-6 px-5 md:px-16 flex flex-col md:flex-row justify-center items-center w-full overflow-x-hidden">
      <header className="text-hero w-full md:max-w-[30rem] flex flex-col items-center md:items-start md:gap-3 gap-6">
        <SectionHeader className="md:text-xl md:text-left text-center" text="Download our app today" />

        <h1 className="text-[#014734] text-4xl text-center md:text-left md:text-5xl font-meduim md:leading-15">
          Get personalized experience
        </h1>
        <Button
          disabled
          className="bg-emerald-50 border cursor-not-allowed shadow-none border-secondary text-secondary rounded-full w-[80%] py-4 font-sans"
          variant={"outline"}
        >
          Coming soon
        </Button>
      </header>

      <div className="w-full mt-10 md:mt-0 md:w-1/2">
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
