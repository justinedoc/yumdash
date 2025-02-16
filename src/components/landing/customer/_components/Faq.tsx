import SectionHeader from "../ui/SectionHeader";

function Faq() {
  return (
    <section className="bg-secondary py-10 px-16 space-y-6">
      <header className="space-y-3 w-full flex flex-col items-center">
        <SectionHeader
          text="FAQS"
          className="text-[#FF5791] text-sm"
          color="#FF5791"
        />
        <h1 className="text-4xl font-bold text-hero text-white">
          Your Questions, Answered.
        </h1>
        <p className="text-gray-400 text-sm">
          Find the answer to your questions below
        </p>
      </header>

      <main className="bg-white rounded-4xl md:p-7">
        <div>
          <div className="size-10">
            <img
              className="w-full"
              src="@/assets/icons/message.svg"
              alt="message icon"
            />
          </div>

          
        </div>
      </main>
    </section>
  );
}

export default Faq;
