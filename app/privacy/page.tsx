import AuroraLayout from "@/components/aurora-layout"

export default function PrivacyPage() {
  return (
    <AuroraLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center geist-font tracking-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-6 text-gray-300 inter-font text-sm md:text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-white geist-font">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, fill out a form, or
              communicate with us. This may include your name, email address, professional information, and any other
              information you choose to provide.
            </p>

            <h2 className="text-xl font-semibold text-white geist-font">2. How We Use Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services. This includes operating
              the community forums, personalizing your experience, communicating with you, and providing anonymized,
              aggregated insights for our Enterprise offerings.
            </p>

            <h2 className="text-xl font-semibold text-white geist-font">3. Information Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with vendors, consultants, and other service
              providers who need access to such information to carry out work on our behalf. We may also share
              aggregated or de-identified information, which cannot reasonably be used to identify you.
            </p>

            <h2 className="text-xl font-semibold text-white geist-font">4. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and
              unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-xl font-semibold text-white geist-font">5. Your Choices</h2>
            <p>
              You may update, correct or delete information about you at any time by logging into your online account or
              emailing us. Please note that we may retain certain information as required by law or for legitimate
              business purposes.
            </p>

            <h2 className="text-xl font-semibold text-white geist-font">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@thinkram.com.</p>

            <p className="pt-4 text-gray-400">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </AuroraLayout>
  )
}
