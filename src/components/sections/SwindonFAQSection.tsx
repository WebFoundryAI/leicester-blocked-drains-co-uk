import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SWINDON_FAQS = [
  {
    question: "How much does it cost to unblock a drain in Swindon?",
    answer: "Most straightforward drain unblocking jobs cost between £80 and £150. The exact price depends on the type of blockage and how accessible your drains are. We always give you a fixed quote before we start any work—no surprises on your bill."
  },
  {
    question: "How quickly can you get to me in an emergency?",
    answer: "For emergency call-outs in Swindon, we typically arrive within 60–90 minutes. We operate 24/7 including evenings, weekends, and bank holidays, with no extra charge for out-of-hours calls."
  },
  {
    question: "Who is responsible for blocked drains outside my property?",
    answer: "If the blockage is in a private drain that only serves your property, it's your responsibility. If it's in a shared sewer or lateral drain (one that connects multiple properties to the public sewer), Thames Water is responsible. We can help you identify which applies and advise on next steps."
  },
  {
    question: "Do you cover Old Town, West Swindon, and Wichelstowe?",
    answer: "Yes—we cover all areas of Swindon borough including Old Town, West Swindon, Wichelstowe, Highworth, Wroughton, Blunsdon, Royal Wootton Bassett, and surrounding villages. If you're within about 15 miles of Swindon town centre, we can help."
  },
  {
    question: "Do I need a CCTV survey, or can you just unblock the drain?",
    answer: "For a one-off blockage, we can usually clear it without a survey. However, if you're experiencing repeated blockages, slow drainage, or you're buying a property, a CCTV survey is worth the investment. It lets us see exactly what's happening inside the pipe and identify any underlying problems."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfer, and all major debit and credit cards. Payment is due on completion of the work. For larger repair jobs, we can discuss payment options before we start."
  }
];

export function SwindonFAQSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Frequently Asked Questions About Blocked Drains in Swindon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions from Swindon homeowners about our drainage services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {SWINDON_FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Export FAQs for schema generation
export const swindonFaqs = SWINDON_FAQS;
