import { Button } from "@/components/ui/button";
import SectionHeader from "../../ui/SectionHeader";
import mobileApp from "@/assets/images/mobile-app.png";

function DownloadApp() {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-x-hidden px-5 py-6 md:flex-row md:px-16">
      <header className="text-hero flex w-full flex-col items-center gap-6 md:max-w-[30rem] md:items-start md:gap-3">
        <SectionHeader
          className="text-center md:text-left md:text-xl"
          text="Download our app today"
        />

        <h1 className="font-meduim text-center text-4xl text-[#014734] md:text-left md:text-5xl md:leading-15">
          Get personalized experience
        </h1>
        <Button
          disabled
          className="border-secondary text-secondary w-full cursor-not-allowed rounded-full border bg-emerald-50 py-4 font-sans shadow-none md:w-[80%]"
          variant={"outline"}
        >
          Coming soon
        </Button>
      </header>

      <div className="mt-10 w-full md:mt-0 md:w-1/2">
        <img
          className="mx-auto w-full md:ml-12 md:w-[90%]"
          src={mobileApp}
          alt="Our mobile number"
        />
      </div>
    </section>
  );
}

export default DownloadApp;
