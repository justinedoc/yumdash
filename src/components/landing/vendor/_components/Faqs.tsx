import SectionHeader from "../../ui/SectionHeader";
import { faqData } from "../constants/faq";
import faqVector from "@/assets/images/faqvec1.png";
import faqVector2 from "@/assets/images/faqvec2.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqOrder = [
  "Onboarding and Sign-Up",
  "Fees and Commissions",
  "Support & Contact",
];

function Faq() {
    return (
      <section className="bg-secondary py-10 md:px-12 space-y-6 relative overflow-hidden">
        <header className="space-y-3 w-full flex flex-col items-center">
          <SectionHeader
            text="FAQS"
            className="text-[#FF5791] text-sm"
            color="#FF5791"
          />
          <h1 className="text-4xl font-bold text-hero text-white text-center">
            Your Questions, Answered.
          </h1>
          <p className="text-white text-sm">
            Find the answer to your questions below
          </p>
        </header>
  
        <main className="bg-white rounded-4xl p-4 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center w-[88%] mx-auto relative z-10">
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
  
        {/* Background Images */}
        <img
            className="absolute bottom-0 left-0 w-[60%]"
            src={faqVector2}
            alt="background"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-0 w-[60%]"
            src={faqVector}
            alt=" background"
            loading="lazy"
          />
      </section>
    );
  }
  
  export default Faq;
  
