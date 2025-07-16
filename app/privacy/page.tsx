import RedWaveLayout from "@/components/red-wave-layout"
import { FaqSection } from "@/components/faq-section"

const privacyFaqs = [
  {
    q: "How does Think RAM ensure data privacy and ethical AI use?",
    a: "We comply with Australian privacy laws and embed ethical AI principles in all services.",
  },
  {
    q: "Will my data or insights be shared with vendors or third parties?",
    a: "No. Your data stays with you. We never share user data without consent.",
  },
  {
    q: "How do you ensure the quality of experts, insights, and recommendations?",
    a: "All content and guidance is curated by experienced professionals, reviewed for quality, and aligned to real-world use cases.",
  },
]

export default function PrivacyPage() {
  return (
    <RedWaveLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-bold tracking-tight">
            Privacy <span className="text-red-500">Policy</span>
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-white font-semibold">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, fill out a form, or
              communicate with us. This may include your name, email address, professional information, and any other
              information you choose to provide.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">2. How We Use Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services. This includes operating
              the community forums, personalizing your experience, communicating with you, and providing anonymized,
              aggregated insights for our Enterprise offerings.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">3. Information Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with vendors, consultants, and other service
              providers who need access to such information to carry out work on our behalf. We may also share
              aggregated or de-identified information, which cannot reasonably be used to identify you.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">4. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and
              unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">5. Your Choices</h2>
            <p>
              You may update, correct or delete information about you at any time by logging into your online account or
              emailing us. Please note that we may retain certain information as required by law or for legitimate
              business purposes.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@thinkram.com.</p>

            <p className="pt-4 text-gray-400">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
      <FaqSection
        title={
          <>
            Privacy, Ethics & <span className="text-red-500">Trust</span>
          </>
        }
        faqs={privacyFaqs}
        className="bg-black/20"
      />
    </RedWaveLayout>
  )
}
