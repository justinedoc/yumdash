import { Button } from "@/components/ui/button";

function DownloadApp() {
  return (
    <section className="py-6 px-16 flex justify-center items-center w-full lg:ml-5">
      <header className="text-hero max-w-[30rem] flex flex-col gap-3">
        <div className="text-[#C20143] flex gap-2 items-center">
          <Line />
          <h1 className="text-xl">Download our app today</h1>
          <Line />
        </div>

        <h1 className="text-[#014734] text-5xl font-meduim tracking-wider leading-15">
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
          className="w-full md:w-[90%] mx-auto"
          src={"/src/assets/images/mobile-app.png"}
          alt="Our mobile number"
        />
      </div>
    </section>
  );
}

function Line() {
  return <div className="w-8 h-[0.1rem] bg-[#C20143]"></div>;
}

export default DownloadApp;
