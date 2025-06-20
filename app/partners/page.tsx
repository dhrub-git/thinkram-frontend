import AuroraLayout from "@/components/aurora-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChartLine,
  faHandshake,
  faMicrophone,
  faRocket,
  faEnvelope,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { GradientButton } from "@/components/ui/gradient-button";

const BenefitCard = ({
  icon,
  title,
  description,
  iconColor = "text-blue-400",
}: {
  icon: any;
  title: string;
  description: string;
  iconColor?: string;
}) => (
  <div className="glass-card rounded-2xl p-6 md:p-8 text-left">
    <div
      className={`w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6`}
    >
      <FontAwesomeIcon icon={icon} className={`${iconColor} text-xl`} />
    </div>
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 geist-font tracking-tight">
      {title}
    </h3>
    <p className="text-gray-300 inter-font leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const ProcessStep = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm geist-font">
      {step}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-2 geist-font tracking-tight">
        {title}
      </h4>
      <p className="text-gray-300 inter-font text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function PartnersPage() {
  return (
    <AuroraLayout>
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 geist-font tracking-tight">
            The ThinkRam <span className="gradient-text">Partner Circle</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-12 md:mb-16 geist-font tracking-tight">
            A Strategic Alliance for High-Impact Firms
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="glass-card rounded-2xl p-6 md:p-10 text-gray-300 inter-font text-sm md:text-base leading-relaxed">
            <p className="mb-4">
              You've built a powerful product or service, but breaking through
              the noise to reach key decision-makers is a constant challenge.
            </p>
            <p className="mb-4">
              The ThinkRam Partner Circle is a curated alliance for firms ready
              to fast-track their relevance in the enterprise and public sector.
            </p>
            <p>
              This is more than a logo on a page—it's a partnership built on
              strategic positioning, shared intelligence, and mutual growth.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center geist-font tracking-tight">
            Why Join the <span className="gradient-text">Partner Circle?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <BenefitCard
              icon={faUserTie}
              title="Executive-Level Advisory"
              description="Receive fractional CIO-style guidance to refine your positioning, strategy, and GTM."
              iconColor="text-blue-400"
            />
            <BenefitCard
              icon={faChartLine}
              title="Actionable Market Intelligence"
              description="Leverage our localized, role-specific insights to give your team a competitive edge."
              iconColor="text-green-400"
            />
            <BenefitCard
              icon={faHandshake}
              title="High-Trust Introductions"
              description="Gain curated access to our network of decision-makers across government and enterprise."
              iconColor="text-purple-400"
            />
            <BenefitCard
              icon={faMicrophone}
              title="Amplify Your Thought Leadership"
              description="Showcase your expertise through the ThinkRam Podcast, co-authored articles, and exclusive roundtables."
              iconColor="text-cyan-400"
            />
            <BenefitCard
              icon={faRocket}
              title="Program & Solution Acceleration"
              description="Collaborate with other top-tier partners to co-design solutions and drive significant impact."
              iconColor="text-pink-400"
            />
            <BenefitCard
              icon={faLightbulb}
              title="Innovation Lab Access"
              description="Get early access to emerging technologies and pilot programs, positioning your firm at the forefront of industry innovation."
              iconColor="text-yellow-400"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center geist-font tracking-tight">
            Your Partnership <span className="gradient-text">Journey</span>
          </h2>
          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-8">
            <ProcessStep
              step="1"
              title="Discovery & Fit Alignment"
              description="An initial assessment to ensure mutual benefit and strategic alignment."
            />
            <ProcessStep
              step="2"
              title="Strategic Onboarding & Goal Clarity"
              description="Defining clear objectives and success metrics for our partnership."
            />
            <ProcessStep
              step="3"
              title="Access to Tailored Insights & Content Activation"
              description="Receiving customized market intelligence and activating co-created content opportunities."
            />
            <ProcessStep
              step="4"
              title="Targeted Introductions & Network Access"
              description="Connecting with relevant stakeholders within the ThinkRam ecosystem."
            />
            <ProcessStep
              step="5"
              title="Ongoing Advisory & Peer Collaboration"
              description="Continuous guidance and networking within the exclusive Partner Circle."
            />
            <ProcessStep
              step="6"
              title="Performance Review & Strategic Planning"
              description="Regular assessment of partnership outcomes and planning for future collaboration."
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <img
                src="/partners.png"
                alt="Strategic Partnership"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 inter-font text-sm">
                    <strong className="text-white">Position Your Brand</strong>{" "}
                    where it truly belongs.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 inter-font text-sm">
                    <strong className="text-white">Enable Growth</strong> by
                    accelerating your development and reach.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 inter-font text-sm">
                    <strong className="text-white">Amplify Your Story</strong>{" "}
                    with the right audience.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 inter-font text-sm">
                    <strong className="text-white">Open Doors</strong> to
                    high-value enterprise opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-300 inter-font leading-relaxed">
                Ready to position your firm at the center of the conversation?
                Let's join forces to fast-track your growth, amplify your story,
                and open doors to high-value enterprise opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <GradientButton asChild size="lg" className="min-w-[280px]">
                <a href="mailto:partners@thinkram.com">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
                  Schedule a Discovery Call
                </a>
              </GradientButton>
              <p className="text-sm text-gray-400 inter-font">
                Contact us at partners@thinkram.com to begin the conversation
              </p>
            </div>
          </div>
        </div>
      </section>
    </AuroraLayout>
  );
}
