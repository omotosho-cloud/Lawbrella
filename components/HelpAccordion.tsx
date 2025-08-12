import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface HelpItem {
  title: string
  content: string
}

const items: HelpItem[] = [
  {
    title: "Take Down Harmful Content",
    content:
      "We can help you identify harmful images or content and guide you through the takedown process."
  },
  {
    title: "MyLawbrella Risk Assessment Tool",
    content:
      "Assess your current situation and risk level with our guided tool, created for survivors."
  },
  {
    title: "Talk to Someone or Get Advice",
    content:
      "Connect with compassionate support staff for guidance and emotional reassurance."
  },
  {
    title: "Preserve Evidence For Later",
    content:
      "Securely store digital evidence for future legal or personal use."
  },
  {
    title: "Not Sure What I Need",
    content:
      "We’ll help you explore your options and find the support that’s right for you."
  }
]

export default function HelpAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F6F8FA] mt-16 py-16">
      <div className="w-[1000px]  mx-auto px-6">
        <h2 className="text-center text-[#000913]  mx-auto text-2xl font-bold mb-8">
          What do you need help with today?
        </h2>
        <div className="bg-white  shadow rounded-lg divide-y">
          {items.map((item, i) => (
            <div key={i} className="p-4 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium">{item.title}</span>
                <span className="text-lg">{openIndex === i ? "-" : "+"}</span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-2 text-gray-600">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
