import { faqData } from "../constants/faqs";
import SectionHeader from "../ui/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqOrder = [
  "Getting started",
  "Support & Contact",
  "Subsription & order",
];

function Faq() {
  return (
    <section className="bg-secondary py-10 md:px-12 space-y-6">
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

      <main className="bg-white rounded-4xl md:p-7 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center w-[88%] mx-auto">
        {faqData.map(({ image, items }, i) => (
          <article
            key={i}
            className="text-sm text-pretty max-h-[70vh] space-y-3 overflow-y-scroll w-full"
          >
            <div>
              <div className="size-14">
                <img className="w-full" src={image} alt="message icon" />
              </div>
            </div>

            <h1 className="text-hero text-2xl">{faqOrder[i]}</h1>

            <Accordion type="single" collapsible>
              {items.map(({ answer, question }) => (
                <AccordionItem
                  key={question}
                  value={question}
                  className="border-secondary"
                >
                  <AccordionTrigger className="text-md cursor-pointer hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>
        ))}
      </main>
    </section>
  );
}

export default Faq;
