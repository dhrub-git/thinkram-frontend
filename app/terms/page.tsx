import RedWaveLayout from "@/components/red-wave-layout"

export default function TermsPage() {
  return (
    <RedWaveLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight font-bold">
            Terms of <span className="text-red-500">Service</span>
          </h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
            <h2 className="text-xl font-semibold text-white font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the ThinkRam platform and services, you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to all of these Terms, do not use our services.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">2. Description of Service</h2>
            <p>
              ThinkRam provides a private community and intelligence platform for technology professionals and
              enterprise leaders. This includes forums, content libraries, newsletters, and other related services.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">3. User Conduct</h2>
            <p>
              You are responsible for all your activity on the platform. You agree to not use the service for any
              illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to
              your use of the service.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">4. Intellectual Property</h2>
            <p>
              The content on the ThinkRam platform, including text, graphics, logos, and software, is the property of
              ThinkRam or its licensors and is protected by copyright and other intellectual property laws. You may not
              use, reproduce, or distribute any content from the service without our express permission.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">
              5. Disclaimers and Limitation of Liability
            </h2>
            <p>
              The service is provided "as is" without any warranties. ThinkRam does not warrant that the service will be
              uninterrupted, timely, secure, or error-free. In no event shall ThinkRam be liable for any indirect,
              incidental, special, consequential or punitive damages.
            </p>

            <h2 className="text-xl font-semibold text-white font-semibold">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the
              new Terms on this page. Your continued use of the service after any such changes constitutes your
              acceptance of the new Terms.
            </p>

            <p className="pt-4 text-gray-400">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </RedWaveLayout>
  )
}
