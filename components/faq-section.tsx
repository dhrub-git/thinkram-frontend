import type React from "react"

interface FaqItem {
  q: string
  a: string
}

interface FaqSectionProps {
  title: React.ReactNode
  faqs: FaqItem[]
  className?: string
}

const FaqAccordion = ({ q, a }: FaqItem) => (
  <details className="bg-white/5 border border-white/10 rounded-lg p-5 group">
    <summary className="flex justify-between items-center font-medium text-white cursor-pointer list-none text-md group-open:text-red-400 font-semibold">
      {q}
      <span className="transition group-open:rotate-180">
        <svg
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </span>
    </summary>
    <p className="text-gray-300 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">{a}</p>
  </details>
)

export const FaqSection = ({ title, faqs, className }: FaqSectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FaqAccordion key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
