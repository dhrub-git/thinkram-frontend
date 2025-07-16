import RedWaveLayout from "@/components/red-wave-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import {
  Check,
  BrainCircuit,
  BookOpen,
  Users,
  Briefcase,
  Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type React from "react";

const professionalFeatures = [
  {
    icon: <BrainCircuit className="h-5 w-5 text-red-400" />,
    text: "Coaching & Mentoring",
  },
  {
    icon: <Users className="h-5 w-5 text-red-400" />,
    text: "Community Hub Access",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-red-400" />,
    text: "Discounted Masterclasses & Workshops",
  },
  {
    icon: <Zap className="h-5 w-5 text-red-400" />,
    text: "Beta Access to SaaS Tools",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-red-400" />,
    text: "AI Assistant",
  },
  {
    icon: <Users className="h-5 w-5 text-red-400" />,
    text: "Webinars / Podcasts",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-red-400" />,
    text: "Career Opportunities",
  },
];

const enterpriseFeatures = {
  realise: [
    "Business Case / IB Review",
    "Risk Assessment",
    "High-Level Delivery Plan",
    "AI Fitment Analysis",
  ],
  accelerate: [
    "Vendor Capability Trends",
    "Tech Debt Review Recommendation",
    "Project Delivery Health Check",
  ],
  modernise: ["AI-Based Proof of Concept"],
  core: [
    "15 Seats Included",
    "Industry Trends & Insights",
    "Consulting-Led Analysis",
    "Full Community Hub Access",
    "Team AI Assistant",
    "Resource Library",
    "Access to All Events / Podcasts",
    "Priority Access to Partner Tools",
  ],
};

const partnerFeatures = {
  realise: [
    "GTM Foundation (2/year)",
    "GTM Strategy Refinement (2/year)",
    "Product/Service Beta Testing (2/year)",
    "Partner Profile Prep for CXO Intros",
  ],
  accelerate: [
    "CTO as a Service (24 hours/year)",
    "Featured Community Engagements",
  ],
  modernise: ["AI Innovation Roadmap (High-Level) (2)"],
  core: [
    "10 Seats Included",
    "Industry Trends & Insights",
    "Consulting-Led Analysis",
    "Full Community Hub Access",
    "Team AI Assistant",
    "Resource Library",
    "Access to All Events",
  ],
};

const membershipFaqs = [
  {
    q: "What is the main difference between the Professional and Enterprise plans?",
    a: "The Professional plan is designed for individuals seeking career growth, community, and insights. The Enterprise plan is for teams and organizations, offering strategic reports, delivery assurance, and dedicated seats for collaboration.",
  },
  {
    q: "Who is the Partner plan best suited for?",
    a: "The Partner plan is tailored for technology vendors, service providers, and consulting firms looking to refine their go-to-market strategy, gain high-trust CXO access, and position their products effectively within the enterprise ecosystem.",
  },
  {
    q: "Can the Enterprise and Partner plans be customized?",
    a: "Yes, both plans are starting points. We work with our enterprise and partner clients to tailor packages that meet their specific strategic objectives, team sizes, and support needs. Contact us to discuss a custom plan.",
  },
  {
    q: "What does 'CTO as a Service' in the Partner plan include?",
    a: "It provides 24 hours per year of dedicated access to our senior technology leaders for strategic advice, product roadmap reviews, technical due diligence, and architectural guidance to help you build a more robust and market-ready offering.",
  },
  {
    q: "How does the 'AI Assistant' work across the different plans?",
    a: "For Professionals, it's a personal productivity tool for generating career assets and insights. For Enterprise and Partner plans, it's a team-based tool with enhanced capabilities for collaborative work, report generation, and strategic analysis.",
  },
];

const FeatureListItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <span className="text-gray-300 text-sm">{text}</span>
  </li>
);

const PlanDetailTabs = ({
  features,
  reportQuantities,
}: {
  features: { realise: string[]; accelerate: string[]; modernise: string[] };
  reportQuantities: { realise: number; accelerate: number; modernise: number };
}) => (
  <Tabs defaultValue="realise" className="w-full mt-4">
    <TabsList className="grid w-full grid-cols-3 bg-white/5 p-1 h-auto">
      <TabsTrigger value="realise" className="tab-trigger text-xs h-full py-2">
        Realise ({reportQuantities.realise})
      </TabsTrigger>
      <TabsTrigger
        value="accelerate"
        className="tab-trigger text-xs h-full py-2"
      >
        Accelerate ({reportQuantities.accelerate})
      </TabsTrigger>
      <TabsTrigger
        value="modernise"
        className="tab-trigger text-xs h-full py-2"
      >
        Modernise ({reportQuantities.modernise})
      </TabsTrigger>
    </TabsList>
    <div className="mt-4 text-left">
      <TabsContent value="realise">
        <ul className="space-y-2">
          {features.realise.map((text, i) => (
            <FeatureListItem
              key={i}
              icon={<Check className="h-4 w-4 text-green-400 mt-0.5" />}
              text={text}
            />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="accelerate">
        <ul className="space-y-2">
          {features.accelerate.map((text, i) => (
            <FeatureListItem
              key={i}
              icon={<Check className="h-4 w-4 text-green-400 mt-0.5" />}
              text={text}
            />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="modernise">
        <ul className="space-y-2">
          {features.modernise.map((text, i) => (
            <FeatureListItem
              key={i}
              icon={<Check className="h-4 w-4 text-green-400 mt-0.5" />}
              text={text}
            />
          ))}
        </ul>
      </TabsContent>
    </div>
  </Tabs>
);

export default function MembershipPage() {
  return (
    <RedWaveLayout currentPage="membership">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Find the Right Plan for Your{" "}
            <span className="text-red-500">Ambition</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From individual professionals to enterprise teams and strategic
            partners, we have a pathway to accelerate your growth.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Professional Plan */}
            <div className="bg-white/5 border-2 border-red-500/80 rounded-2xl p-6 md:p-8 flex flex-col relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-6 pt-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                  Professional
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                  A$29{" "}
                  <span className="text-lg md:text-xl text-gray-400 font-normal">
                    + GST / month
                  </span>
                </p>
                <p className="text-gray-400 text-sm">
                  For individuals ready to accelerate their career.
                </p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-left">
                {professionalFeatures.map((feature, i) => (
                  <FeatureListItem
                    key={i}
                    icon={feature.icon}
                    text={feature.text}
                  />
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full mt-auto border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                  Enterprise
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                  A$4,999{" "}
                  <span className="text-lg md:text-xl text-gray-400 font-normal">
                    + GST / month
                  </span>
                </p>
                <p className="text-gray-400 text-sm">
                  For teams driving large-scale transformation.
                </p>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-white text-left mb-3">
                  Core Features:
                </h4>
                <ul className="space-y-2 mb-4 text-left">
                  {enterpriseFeatures.core.map((text, i) => (
                    <FeatureListItem
                      key={i}
                      icon={<Check className="h-4 w-4 text-green-400 mt-0.5" />}
                      text={text}
                    />
                  ))}
                </ul>
                <h4 className="font-semibold text-white text-left mt-6 mb-2">
                  Strategic Reports:
                </h4>
                <PlanDetailTabs
                  features={{
                    realise: enterpriseFeatures.realise,
                    accelerate: enterpriseFeatures.accelerate,
                    modernise: enterpriseFeatures.modernise,
                  }}
                  reportQuantities={{ realise: 4, accelerate: 3, modernise: 1 }}
                />
              </div>
              <Button
                variant="outline"
                className="w-full mt-auto border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>

            {/* Partner Plan */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">
                  Partner
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                  A$2,999{" "}
                  <span className="text-lg md:text-xl text-gray-400 font-normal">
                    + GST / month
                  </span>
                </p>
                <p className="text-gray-400 text-sm">
                  For vendors & service providers seeking growth.
                </p>
              </div>
              <div className="flex-grow">
                <h4 className="font-semibold text-white text-left mb-3">
                  Core Features:
                </h4>
                <ul className="space-y-2 mb-4 text-left">
                  {partnerFeatures.core.map((text, i) => (
                    <FeatureListItem
                      key={i}
                      icon={<Check className="h-4 w-4 text-green-400 mt-0.5" />}
                      text={text}
                    />
                  ))}
                </ul>
                <h4 className="font-semibold text-white text-left mt-6 mb-2">
                  Enablement Services:
                </h4>
                <PlanDetailTabs
                  features={{
                    realise: partnerFeatures.realise,
                    accelerate: partnerFeatures.accelerate,
                    modernise: partnerFeatures.modernise,
                  }}
                  reportQuantities={{ realise: 4, accelerate: 2, modernise: 1 }}
                />
              </div>
              <Button
                variant="outline"
                className="w-full mt-auto border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
                asChild
              >
                <Link href="/contact">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Membership FAQs"
        faqs={membershipFaqs}
        className="bg-black/20"
      />
    </RedWaveLayout>
  );
}
