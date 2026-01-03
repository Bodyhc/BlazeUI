import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is BlazeUI?",
    answer:
      "BlazeUI is a professional, ready-to-use component library for React, built with TailwindCSS and shadcn/ui. It's designed to help you build beautiful, responsive, and accessible user interfaces with speed.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, BlazeUI is completely free and open-source. You can use it in any personal or commercial project.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Absolutely. The components are built with TailwindCSS and CSS variables, making them highly customizable. You can easily change colors, spacing, and more to match your brand.",
  },
  {
    question: "How do I use the components?",
    answer:
      "You can browse the component library, find the component you need, and copy the code into your project. It's that simple.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Can’t find the answer you’re looking for? Reach out to our team.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
