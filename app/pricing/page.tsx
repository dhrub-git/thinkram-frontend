import AuroraLayout from "@/components/aurora-layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faStar, faUserTie } from "@fortawesome/free-solid-svg-icons"
import type React from "react"
import { GradientButton } from "@/components/ui/gradient-button"

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3 mt-1 flex-shrink-0 h-5 w-5" />
    <span className="text-gray-300 inter-font text-sm">{children}</span>
  </li>
)

export default function PricingPage() {
  return (
    <AuroraLayout currentPage="pricing">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 geist-font tracking-tight">
            Find the <span className="gradient-text">Right Plan</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto inter-font mb-12 md:mb-16">
            From tech-curious individuals to enterprise transformation teams - choose the plan that fits your journey.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter Plan */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 geist-font tracking-tight">
                  Starter
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1 geist-font">Free</p>
                <p className="text-gray-400 inter-font text-sm">
                  For tech-curious individuals wanting a taste of ThinkRam.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <PlanFeature>
                  <strong>One curated Insight per week via email</strong>
                  <br />
                  <span className="text-gray-400">Thought-provoking, short-form industry trend or tip</span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Access to Selected Public Posts & Resources</strong>
                  <br />
                  <span className="text-gray-400">
                    Open blog articles, limited podcast snippets, and industry roundups
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Invites to Open Webinars (Quarterly)</strong>
                  <br />
                  <span className="text-gray-400">Join publicly available learning sessions or fireside chats</span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Access to ThinkRam Insights Archives</strong>
                  <br />
                  <span className="text-gray-400">Public discussions and archived content</span>
                </PlanFeature>
              </ul>
              <GradientButton variant="variant" className="w-full">
                Get Started (Free)
              </GradientButton>
            </div>

            {/* Pro Plan */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col border-2 border-purple-500/50 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full geist-font flex items-center">
                  <FontAwesomeIcon icon={faUserTie} className="mr-2 h-3 w-3" />
                  FOR PROFESSIONALS
                </div>
              </div>
              <div className="text-center mb-6 pt-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 geist-font tracking-tight">Pro</h2>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1 geist-font">
                  AUD $20 <span className="text-lg md:text-xl text-gray-400 font-normal inter-font">/ month</span>
                </p>
                <p className="text-gray-400 inter-font text-sm">
                  For consultants, PMs, BAs, architects, tech freelancers and specialists who want to stay sharp,
                  connected, and opportunity-ready.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <PlanFeature>
                  <strong>Weekly Deep-Dive Insight</strong>
                  <br />
                  <span className="text-gray-400">Sharp, job-relevant guidance curated for real-world execution</span>
                </PlanFeature>
                <PlanFeature>
                  <strong>AI & Tools Briefs</strong>
                  <br />
                  <span className="text-gray-400">
                    Use-case based tips and frameworks to uplift your daily workflow
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Access to the ThinkRam Community</strong>
                  <br />
                  <span className="text-gray-400">
                    Join a trusted space to ask questions, share wins, and get referrals
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Early Signals & Opportunity Alerts</strong>
                  <br />
                  <span className="text-gray-400">
                    Be the first to hear about market trends, relevant tools, and gigs
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Thought Leadership Pathways</strong>
                  <br />
                  <span className="text-gray-400">
                    Eligible to contribute to ThinkRam blogs, interviews, or roundtables (by invite)
                  </span>
                </PlanFeature>
              </ul>
              <GradientButton className="w-full">Start Pro Subscription</GradientButton>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col border-2 border-blue-500/50 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full geist-font flex items-center">
                  <FontAwesomeIcon icon={faStar} className="mr-2 h-3 w-3" />
                  FOR LEADERS
                </div>
              </div>
              <div className="text-center mb-6 pt-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 geist-font tracking-tight">
                  Enterprise
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1 geist-font">
                  AUD $500 <span className="text-lg md:text-xl text-gray-400 font-normal inter-font">/ month</span>
                </p>
                <p className="text-gray-400 inter-font text-sm mb-2">Covers up to 10 users</p>
                <p className="text-gray-400 inter-font text-xs">
                  For CIOs, digital leaders, transformation teams, and delivery executives navigating tech disruption
                  and execution challenges.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <PlanFeature>
                  <strong>2 x Strategy / Delivery meetings per Month</strong>
                  <br />
                  <span className="text-gray-400">
                    Direct, confidential sessions with ThinkRam team to sharpen decisions, handle roadblocks, or vet
                    bold moves
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Enterprise-Only Insight Briefings</strong>
                  <br />
                  <span className="text-gray-400">
                    Curated intelligence, frameworks, and execution tools tailored to large-scale transformation
                    realities
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Real-Time Market Pulse</strong>
                  <br />
                  <span className="text-gray-400">
                    Field-tested perspectives on AI, reform, public-private shifts, and tech org readiness — not just
                    trend slides
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Trusted Talent Referrals</strong>
                  <br />
                  <span className="text-gray-400">
                    Access to a vetted network of contractors and experts for urgent or strategic needs — AI-aware,
                    delivery-proven
                  </span>
                </PlanFeature>
                <PlanFeature>
                  <strong>Confidential Sparring Partner</strong>
                  <br />
                  <span className="text-gray-400">
                    ThinkRam becomes your behind-the-scenes sounding board for tough calls, complex programs, or team
                    challenges
                  </span>
                </PlanFeature>
              </ul>
              <GradientButton className="w-full">Contact Sales</GradientButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center geist-font tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Why is the Starter plan free?",
                a: "We believe great insights should be accessible to everyone in tech. The Starter plan gives you a taste of ThinkRam's value while building a vibrant community. As more professionals join and contribute, the collective intelligence grows stronger, benefiting everyone including our paid subscribers.",
              },
              {
                q: "What makes the Pro subscription worth AUD $20/month?",
                a: "Pro subscribers get weekly deep-dive insights that go beyond surface-level trends, practical AI & tools briefs for immediate workflow improvements, full community access for networking and referrals, early alerts on market opportunities, and the chance to build thought leadership through our content platforms. It's designed to pay for itself through better decisions and new opportunities.",
              },
              {
                q: "How do the Enterprise strategy meetings work?",
                a: "Each Enterprise subscription includes 2 confidential strategy/delivery meetings per month with our team. These aren't generic consultations - they're focused sessions where you can discuss specific roadblocks, vet bold decisions, or get real-world perspectives on complex transformation challenges. Think of it as having seasoned practitioners on speed dial.",
              },
              {
                q: "Can I upgrade or downgrade my plan anytime?",
                a: "Absolutely. You can upgrade from Starter to Pro instantly, or contact us to discuss Enterprise needs. Pro subscribers can pause or cancel anytime. Enterprise customers work with dedicated account management for any plan changes or adjustments to user counts.",
              },
              {
                q: "What kind of talent referrals does Enterprise include?",
                a: "Our Enterprise talent network consists of AI-aware, delivery-proven contractors and specialists who've been vetted through our community. Whether you need a transformation architect for 6 months or a specialist for a critical AI implementation, we connect you with practitioners who understand both the technology and the execution realities.",
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card rounded-lg p-5 group">
                <summary className="flex justify-between items-center font-medium text-white cursor-pointer list-none inter-font text-md group-open:text-blue-400">
                  {faq.q}
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
                <p className="text-gray-300 mt-3 group-open:animate-fadeIn inter-font text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </AuroraLayout>
  )
}
