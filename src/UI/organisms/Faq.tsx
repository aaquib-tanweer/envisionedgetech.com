import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/UI/shadcn/ui/accordion'
import { faqs } from '@/constants/data/faqs'

export function Faq() {
  return (
    <div className="p-8  pt-36 container">
      <div>
        <h1 className="text-5xl font-bold pb-8 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 bg-clip-text text-transparent">
          Frequently Asked Questions<span className="text-blue-500">.</span>
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              value={faq.question}
              className="lg:text-xl"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="lg:text-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
