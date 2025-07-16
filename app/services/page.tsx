"use client";

import RedWaveLayout from "@/components/red-wave-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import { FaqSection } from "@/components/faq-section";

const enterpriseFaqs = [
  {
    q: "How can Think RAM help us with digital transformation or project delivery?",
    a: "We help with business case design & review, strategy & architecture reviews and development, MVP builds, AI governance, PMO governance & assurance, and full-cycle delivery support. We partner with you from idea to execution.",
  },
  {
    q: "Do you provide hands-on support or just strategic advice?",
    a: "We do both. From fractional CIOs to delivery teams, Think RAM offers strategic guidance and practical delivery services.",
  },
  {
    q: "What if we already work with a Big 4 firm or another vendor?",
    a: "Think RAM complements your existing partners. We plug into live programs to accelerate delivery, recover momentum, or provide hands-on execution oversight—fast. You get lean, expert support without overheads, plus AI-first thinking and local compliance baked in. We enhance what’s in place, not replace it.",
  },
  {
    q: "Can Think RAM help recover failing or stalled programs?",
    a: "Yes. Program rescue is one of our strengths. We bring clarity, reset roadmaps, and rebuild confidence with structured checkpoints and proven delivery methods.",
  },
  {
    q: "What level of leadership engagement can we expect?",
    a: "Senior-level. We bring 20+ years of industry experience and deep public and private sector relationships to help you navigate complex landscapes.",
  },
];

const ServicePillarCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px]">
    <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base md:text-lg leading-tight">
      {title}
    </h4>
    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

/**
 * RamPhase Component
 *
 * Renders a phase of the RAM (Realise-Accelerate-Modernise) framework with comprehensive
 * information about services, outputs, outcomes, and checkpoints.
 *
 * @param phase - The phase identifier (R, A, or M)
 * @param title - The phase title (Realise, Accelerate, or Modernise)
 * @param description - Brief description of the phase purpose
 * @param services - Array of services mapped to this phase
 * @param outputs - Array of tangible deliverables produced in this phase
 * @param outcomes - Array of business outcomes achieved through this phase
 * @param checkpoints - Array of validation points and milestones for phase completion
 */
const RamPhase = ({
  phase,
  title,
  description,
  services,
  outputs,
  outcomes,
  checkpoints,
}: {
  phase: string;
  title: string;
  description: string;
  services: string[];
  outputs: string[];
  outcomes: string[];
  checkpoints: string[];
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
    <div className="lg:col-span-1 text-center lg:text-left mb-6 lg:mb-0">
      <h3 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-2">
        {phase}
      </h3>
      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
        {title}
      </h4>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
        <h5 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">
          Services Mapped
        </h5>
        <ul className="space-y-1.5 sm:space-y-2">
          {services.map((item, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300"
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />{" "}
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
        <h5 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">
          Outputs
        </h5>
        <ul className="space-y-1.5 sm:space-y-2">
          {outputs.map((item, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300"
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />{" "}
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* OUTCOMES SECTION - COMMENTED OUT AS REQUESTED
      <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
        <h5 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">
          Outcomes
        </h5>
        <ul className="space-y-1.5 sm:space-y-2">
          {outcomes.map((item, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300"
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />{" "}
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      */}
      {/* CHECKPOINTS SECTION - COMMENTED OUT AS REQUESTED
      <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
        <h5 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">
          Checkpoints
        </h5>
        <ul className="space-y-1.5 sm:space-y-2">
          {checkpoints.map((item, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300"
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mt-0.5 flex-shrink-0" />{" "}
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      */}
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <RedWaveLayout currentPage="services">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-red-500">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16">
            Full-spectrum support for digital and technology transformations,
            driven by our Realise-Accelerate-Modernise (RAM) framework.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="strategic" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1 sm:p-1 min-h-[52px] sm:min-h-[56px]">
              <TabsTrigger
                value="strategic"
                className="tab-trigger text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-3 flex items-center justify-center h-full"
              >
                <span className="text-center leading-tight">
                  Strategic Framing
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="delivery"
                className="tab-trigger text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-3 flex items-center justify-center h-full"
              >
                <span className="text-center leading-tight">
                  Delivery Enablement
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="governance"
                className="tab-trigger text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-3 flex items-center justify-center h-full"
              >
                <span className="text-center leading-tight">
                  Governance & Assurance
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="strategic" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServicePillarCard
                  title="Business Case Development"
                  description="Build credible, outcome-oriented business cases aligned to enterprise goals."
                />
                <ServicePillarCard
                  title="Strategy to Execution Road-mapping"
                  description="Translate strategic intent into executable blueprints and transformation pathways."
                />
                <ServicePillarCard
                  title="Enterprise Architecture & Solution Design"
                  description="Define scalable, secure, and integrated architectures that support agility."
                />
                <ServicePillarCard
                  title="AI-First Operating Model Design"
                  description="Embed AI and automation into core business models, workflows, and talent."
                />
                <ServicePillarCard
                  title="Capability & Readiness Assessment"
                  description="Identify delivery gaps, skills shortages, platform maturity, and risk areas."
                />
                <ServicePillarCard
                  title="Stakeholder Alignment & Steering Setup"
                  description="Engage the right people with the right decision-making frameworks from day one."
                />
                {/* <ServicePillarCard
                  title="Change & Comms Planning"
                  description="Lay the foundation for organisational buy-in and behavioural adoption early."
                /> */}
              </div>
            </TabsContent>

            <TabsContent value="delivery" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServicePillarCard
                  title="End-to-End Project & Program Delivery"
                  description="Lead cross-functional delivery with strong governance, milestones, and transparency."
                />
                <ServicePillarCard
                  title="Project Rescue & Re-Alignment"
                  description="Reboot underperforming projects through diagnostic review and agile reset plans."
                />
                <ServicePillarCard
                  title="MVP to Full Solution Delivery"
                  description="Design, build, test, and scale products iteratively driven by customer value."
                />
                <ServicePillarCard
                  title="Vendor & Partner Orchestration"
                  description="Align external vendors and internal teams under unified outcomes."
                />
                <ServicePillarCard
                  title="PMO-as-a-Service or Maturity Uplift"
                  description="Build lightweight, outcome-driven delivery governance to support scaling programs."
                />
                <ServicePillarCard
                  title="Delivery Model Uplift & Agile Coaching"
                  description="Establish squads, delivery rituals, and ceremonies aligned with business rhythms."
                />
                <ServicePillarCard
                  title="Product Ownership Support"
                  description="Help organisations manage product vision, prioritisation, and release planning."
                />
                <ServicePillarCard
                  title="Cyber Risk & Compliance Integration"
                  description="Ensure delivery is secure-by-design, audit-friendly, and meets compliance."
                />
              </div>
            </TabsContent>

            <TabsContent value="governance" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServicePillarCard
                  title="AI Governance & Risk Frameworks"
                  description="Design responsible AI oversight aligned to enterprise policy, ethics, and compliance."
                />
                <ServicePillarCard
                  title="Portfolio & Program Governance Models"
                  description="Establish mechanisms for prioritisation, benefit tracking, and executive visibility."
                />
                <ServicePillarCard
                  title="Change Management & Adoption Planning"
                  description="Drive user readiness, behavioural change, and capability uplift across teams."
                />
                <ServicePillarCard
                  title="Post-Implementation Health Checks"
                  description="Ensure benefits realisation, adoption tracking, and issue remediation."
                />
                <ServicePillarCard
                  title="Performance & Value Measurement"
                  description="Track ROI, KPIs, customer satisfaction, and team performance throughout lifecycle."
                />
                {/* <ServicePillarCard
                  title="Sustainment Strategy & BAU Transition"
                  description="Define handover models, support structure, and continuous improvement pathways."
                /> */}
                <ServicePillarCard
                  title="Innovation Readiness"
                  description="Build feedback loops and innovation channels for iterative transformation."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              The <span className="text-red-500">RAM</span> Framework
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our full-spectrum model drives successful transformations through
              structured execution, measurable outcomes, and high-trust
              governance.
            </p>
          </div>

          <div className="space-y-20">
            <RamPhase
              phase="R"
              title="Realise"
              description="Clarify vision. Align stakeholders. Build confidence to invest."
              services={[
                "Business Case Development",
                "Strategy to Execution Road-mapping",
                "Enterprise Architecture & Solution Design",
                "AI-First Operating Model Design",
                "Capability & Readiness Assessment",
                "Executive & Stakeholder Alignment",
                "Early-stage Change & Comms Planning",
                "Cyber Risk & Compliance Considerations",
              ]}
              outputs={[
                "Business case with ROI",
                "Delivery roadmap & blueprint",
                "Execution-ready architecture",
                "AI adoption & risk framework",
                "Governance & decision model",
                "Stakeholder map & alignment matrix",
              ]}
              outcomes={[
                "Shared & articulated vision",
                "Investment decision backed by confidence",
                "Key risks and gaps identified",
                "Aligned operating model and teams",
                "AI-first thinking embedded",
              ]}
              checkpoints={[
                "Business case signed off",
                "Architecture reviewed and endorsed",
                "Governance roles confirmed",
                "Cyber/AI risk profile assessed",
                "Delivery roadmap accepted",
                "Executive alignment secured",
              ]}
            />
            <RamPhase
              phase="A"
              title="Accelerate"
              description="Deliver outcomes. Enable speed. Maintain control."
              services={[
                "End-to-End Program/Project Delivery",
                "Project Rescue & Re-Alignment",
                "MVP to Full Product Delivery",
                "Agile Delivery Coaching",
                "Vendor/Partner Orchestration",
                "Product Ownership Support",
                "PMO-as-a-Service",
                "Secure-by-Design Implementation",
              ]}
              outputs={[
                "MVPs & working software",
                "Program-level dashboards",
                "Agile squads with clear cadence",
                "Delivery health reviews",
                "Updated delivery plans & risk logs",
                "PMO operating rhythm",
              ]}
              outcomes={[
                "Accelerated delivery pace",
                "Recovered failing projects",
                "Maintained cross-functional alignment",
                "Execution visibility for sponsors",
                "Reduced delivery risk",
                "Realised value through increments",
              ]}
              checkpoints={[
                "MVP validated by end-users",
                "Sprint/release milestones achieved",
                "Project health reviews passed",
                "Budget vs. burn reviewed",
                "PMO assurance signed off",
              ]}
            />
            <RamPhase
              phase="M"
              title="Modernise"
              description="Scale value. Sustain impact. Evolve continuously."
              services={[
                "Post-Implementation Health Checks",
                "AI Governance & Risk Frameworks",
                "Change Management & User Adoption",
                "Performance Measurement",
                "BAU Transition Planning",
                "Innovation Readiness",
              ]}
              outputs={[
                "Post-implementation reports",
                "AI/automation governance framework",
                "Adoption & training outcomes",
                "KPI and ROI tracking dashboards",
                "Innovation roadmap",
                "Handover plans to operations",
              ]}
              outcomes={[
                "Sustained solution adoption",
                "Capability uplift across teams",
                "ROI tracked and realised",
                "Ongoing innovation embedded",
                "Risk-managed evolution of AI",
              ]}
              checkpoints={[
                "Post-implementation review done",
                "Adoption metrics achieved",
                "Benefits realisation on track",
                "BAU handover completed",
                "Long-term governance embedded",
              ]}
            />
          </div>
        </div>
      </section>
      <FaqSection
        title={
          <>
            For <span className="text-red-500">Enterprises</span>
          </>
        }
        faqs={enterpriseFaqs}
      />
    </RedWaveLayout>
  );
}
