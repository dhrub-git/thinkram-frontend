import type React from "react";
import RedWaveLayout from "@/components/red-wave-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  BrainCircuit,
  GitMerge,
  Scale,
  Handshake,
  Building,
} from "lucide-react";
import { FaqSection } from "@/components/faq-section";

const generalFaqs = [
  {
    q: "What is Think RAM and how is it different from traditional consulting and analyst firms?",
    a: "Think RAM is a human-led, AI-powered transformation partner. Unlike consulting and analyst giants that heavily focus on strategy and macro-level reports and insights, we blend real-world execution, strategic insights, and hands-on delivery into one community-powered ecosystem.",
  },
  {
    q: "Who is Think RAM built for?",
    a: "We serve three core audiences: tech professionals looking to stay relevant and visible, enterprise leaders needing trusted digital transformation support, and partners seeking growth and CXO access.",
  },
  {
    q: "What does “Human-led, AI-powered” mean in practice?",
    a: "Our solutions combine expert judgment with smart automation. People bring perspective, context, and ethics; AI brings speed, scalability, and insight.",
  },
  {
    q: "What does RAM stand for and how does the RAM Framework work?",
    a: "RAM stands for Realise, Accelerate, Modernise. It's our unique end-to-end simple yet effective framework for delivering transformation. You can learn more about our approach in our Mission section above.",
  },
  {
    q: "Is Think RAM only for Australian clients and professionals?",
    a: "While we focus on Australia’s digital future, our insights, frameworks, and services are globally relevant and scalable.",
  },
];

const outcomesFaqs = [
  {
    q: "What kind of impact has Think RAM had for its clients and members?",
    a: "We’ve influenced over $2B in transformation programs and built a growing network of empowered tech professionals.",
  },
  {
    q: "How is success measured in your engagements?",
    a: "We focus on outcomes: delivery milestones achieved, risks mitigated, and capabilities uplifted.",
  },
  {
    q: "Can you share examples or case studies of successful transformation projects?",
    a: "Yes. Members and clients can access anonymised success stories and detailed examples in our member resource hub.",
  },
];

const WhyThinkRamCard = ({
  icon,
  title,
  description,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 text-left flex flex-col">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 sm:mb-6">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
      {title}
    </h3>
    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4 flex-grow">
      {description}
    </p>
    <p className="text-red-400 font-semibold text-xs sm:text-sm italic leading-relaxed">
      {cta}
    </p>
  </div>
);

const DifferentiatorTable = () => (
  <div className="overflow-x-auto rounded-xl border border-white/10">
    <table className="w-full min-w-[800px] text-sm text-left text-gray-300">
      <thead className="text-xs sm:text-sm text-white uppercase bg-white/5">
        <tr>
          <th
            scope="col"
            className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-tl-lg"
          >
            Capability
          </th>
          <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            Think RAM
          </th>
          <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            Traditional Consultants
          </th>
          <th scope="col" className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            Big SIs
          </th>
          <th
            scope="col"
            className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-tr-lg"
          >
            Boutique Firms
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            capability: "Core Model",
            thinkram: "Human-led, AI-powered delivery & community",
            consultants: "Advisory, frameworks, reports",
            sis: "Resource augmentation, large-scale implementation",
            boutiques: "Specialised niche expertise",
          },
          {
            capability: "Key Strength",
            thinkram: "Strategy-to-execution speed & trust",
            consultants: "Strategic analysis, industry research",
            sis: "Scale, process, technical depth",
            boutiques: "Deep but narrow skill sets",
          },
          {
            capability: "Focus",
            thinkram: "Outcomes, capability uplift, partnership",
            consultants: "Recommendations, slide decks",
            sis: "Inputs, resource hours, project scope",
            boutiques: "Specific problem-solving",
          },
          {
            capability: "Team Structure",
            thinkram: "Lean, expert-led, transparent",
            consultants: "Pyramid structure, leveraged teams",
            sis: "Large, multi-layered teams",
            boutiques: "Small, senior-heavy teams",
          },
          {
            capability: "AI Integration",
            thinkram: "Core to our model (ethically governed)",
            consultants: "Often theoretical or an add-on service",
            sis: "Platform-centric, can be siloed",
            boutiques: "Varies; often tool-specific",
          },
          {
            capability: "Community & Ecosystem",
            thinkram: "Central to value proposition (nation-building)",
            consultants: "Alumni network, formal partnerships",
            sis: "Vendor alliances, user conferences",
            boutiques: "Limited to informal networks",
          },
        ].map((row, index) => (
          <tr key={index} className="bg-black/20 border-b border-white/10">
            <th
              scope="row"
              className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-white text-xs sm:text-sm"
            >
              {row.capability}
            </th>
            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-green-400 font-semibold text-xs sm:text-sm leading-relaxed">
              {row.thinkram}
            </td>
            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm leading-relaxed">
              {row.consultants}
            </td>
            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm leading-relaxed">
              {row.sis}
            </td>
            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm leading-relaxed">
              {row.boutiques}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TeamMemberCard = ({
  name,
  title,
  bio,
  imageUrl,
  linkedin,
  twitter,
}: {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  twitter?: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 text-center">
    <img
      src={imageUrl || "/placeholder.svg"}
      alt={name}
      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 sm:mb-6 border-2 border-white/20 object-cover"
    />
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 tracking-tight leading-tight">
      {name}
    </h3>
    <p className="text-red-400 text-xs sm:text-sm mb-3 sm:mb-4">{title}</p>
    <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
      {bio}
    </p>
    <div className="flex justify-center space-x-6">
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
        >
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
      )}
    </div>
  </div>
);

const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left group hover:border-red-500/30 transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
      {title}
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <RedWaveLayout currentPage="about">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-red-500">Think RAM</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We exist to shift the odds in digital transformation—building a
            future where Australia leads the world in responsible, human-led,
            AI-powered innovation.
          </p>
        </div>
      </section>

      {/* Story, Vision, Mission Grid */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Story */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-red-500">Story</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Think RAM was born out of a deep passion to help enterprises
                deliver smarter, faster, and more sustainably. We exist to
                realise a future of transformation success—by enabling leaders,
                uplifting tech professionals, and unlocking growth for partners.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-red-500">Vision</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A future where Australia leads the world in responsible,
                human-led, AI-powered digital transformation.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                For two decades, the tech transformation failure rate has sat at
                75%. We're here to change that.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-red-500">Mission</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 font-semibold">
                Make strategy executable. Make insights actionable. Make
                transformation real.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                We combine strategic thinking with grounded, agile delivery so
                you can accelerate impact without the baggage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            Our <span className="text-red-500">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={<BrainCircuit className="w-6 h-6 text-red-400" />}
              title="Human-led. AI-powered."
              description="We believe in the power of human insight enhanced by artificial intelligence, not replaced by it."
            />
            <ValueCard
              icon={<Rocket className="w-6 h-6 text-red-400" />}
              title="Practical over theoretical."
              description="We focus on real-world solutions that deliver measurable outcomes, not just academic concepts."
            />
            <ValueCard
              icon={<Scale className="w-6 h-6 text-red-400" />}
              title="Transparency over complexity."
              description="We make complex transformations understandable through clear communication and honest guidance."
            />
            <ValueCard
              icon={<Handshake className="w-6 h-6 text-red-400" />}
              title="Trust over transaction."
              description="We build long-term partnerships based on trust, not just short-term project deliverables."
            />
            <div className="md:col-span-2 lg:col-span-2">
              <ValueCard
                icon={<Building className="w-6 h-6 text-red-400" />}
                title="Nation-first, impact-focused."
                description="We're committed to building Australia's digital future through meaningful, sustainable transformation initiatives."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-red-500">Team</span>
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Led by senior transformation experts who've delivered across $2B+
              Portfolio, 350+ programs, mentored 1000+ professionals, and built
              high-trust ecosystems in government and enterprise.
            </p>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Think Strategy. Think Transformation. Think RAM.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed italic">
                Whether you're a leader, builder, or change-maker—Think RAM is
                where your next chapter begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                $2B+
              </p>
              <p className="text-white font-semibold mb-2">Portfolio Value</p>
              <p className="text-gray-400 text-sm">
                Transformation programs delivered
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                350+
              </p>
              <p className="text-white font-semibold mb-2">Programs</p>
              <p className="text-gray-400 text-sm">Successfully executed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                100+
              </p>
              <p className="text-white font-semibold mb-2">Professionals</p>
              <p className="text-gray-400 text-sm">Mentored and empowered</p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title={
          <>
            General <span className="text-red-500">FAQs</span>
          </>
        }
        faqs={generalFaqs}
        className="bg-black/20"
      />

      <FaqSection
        title={
          <>
            Outcomes & <span className="text-red-500">Results</span>
          </>
        }
        faqs={outcomesFaqs}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Join Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            We're looking for passionate individuals to help shape the future of
            human-AI collaboration.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-red-500 text-white hover:bg-red-500 hover:text-white px-10 py-6 text-base font-semibold bg-transparent"
          >
            <a
              href="mailto:careers@thinkram.com"
              className="flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </section>
    </RedWaveLayout>
  );
}
