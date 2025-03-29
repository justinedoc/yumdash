import { faqData } from "../constants/faqs";
import SectionHeader from "../../ui/SectionHeader";

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
    <section id="faqs" className="bg-secondary space-y-6 py-10 md:px-12">
      <header className="flex w-full flex-col items-center space-y-3">
        <SectionHeader
          text="FAQS"
          className="text-sm text-[#FF5791]"
          color="#FF5791"
        />
        <h1 className="text-hero text-center text-4xl font-bold text-white">
          Your Questions, Answered.
        </h1>
        <p className="text-sm text-gray-400">
          Find the answer to your questions below
        </p>
      </header>

      <main className="mx-auto grid w-[88%] grid-cols-1 justify-items-center gap-10 rounded-4xl bg-white p-4 md:grid-cols-3 md:p-7">
        {faqData.map(({ image, items }, i) => (
          <article
            key={i}
            className="max-h-[70vh] w-full space-y-3 overflow-y-scroll text-sm text-pretty"
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
