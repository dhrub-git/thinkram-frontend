import type React from "react"
import RedWaveLayout from "@/components/red-wave-layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Rocket, BrainCircuit, GitMerge, Scale, Handshake, Building } from "lucide-react"
import { FaqSection } from "@/components/faq-section"

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
    a: "RAM stands for Realise, Accelerate, Modernise. It’s our unique end-to-end simple yet effective framework for delivering transformation. You can learn more on our Services page.",
  },
  {
    q: "Is Think RAM only for Australian clients and professionals?",
    a: "While we focus on Australia’s digital future, our insights, frameworks, and services are globally relevant and scalable.",
  },
]

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
]

const WhyThinkRamCard = ({
  icon,
  title,
  description,
  cta,
}: {
  icon: React.ReactNode
  title: string
  description: string
  cta: string
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-left flex flex-col">
    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">{icon}</div>
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-300 leading-relaxed text-sm mb-4 flex-grow">{description}</p>
    <p className="text-red-400 font-semibold text-sm italic">{cta}</p>
  </div>
)

const DifferentiatorTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[800px] text-sm text-left text-gray-300">
      <thead className="text-xs text-white uppercase bg-white/5">
        <tr>
          <th scope="col" className="px-6 py-3 rounded-tl-lg">
            Capability
          </th>
          <th scope="col" className="px-6 py-3">
            Think RAM
          </th>
          <th scope="col" className="px-6 py-3">
            Traditional Consultants
          </th>
          <th scope="col" className="px-6 py-3">
            Big SIs
          </th>
          <th scope="col" className="px-6 py-3 rounded-tr-lg">
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
            <th scope="row" className="px-6 py-4 font-medium text-white">
              {row.capability}
            </th>
            <td className="px-6 py-4 text-green-400 font-semibold">{row.thinkram}</td>
            <td className="px-6 py-4">{row.consultants}</td>
            <td className="px-6 py-4">{row.sis}</td>
            <td className="px-6 py-4">{row.boutiques}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const TeamMemberCard = ({
  name,
  title,
  bio,
  imageUrl,
  linkedin,
  twitter,
}: { name: string; title: string; bio: string; imageUrl: string; linkedin?: string; twitter?: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
    <img
      src={imageUrl || "/placeholder.svg"}
      alt={name}
      className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-2 border-white/20 object-cover"
    />
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 tracking-tight">{name}</h3>
    <p className="text-red-400 text-sm mb-4">{title}</p>
    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{bio}</p>
    <div className="flex justify-center space-x-4">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
      )}
    </div>
  </div>
)

export default function AboutPage() {
  return (
    <RedWaveLayout currentPage="about">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Why <span className="text-red-500">Enterprises Choose Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Think RAM bridges the strategy–execution gap with a human-led, AI-powered delivery model—built on 20+ years
            of real-world transformation experience, tailored for Australia’s enterprise landscape.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WhyThinkRamCard
              icon={<Rocket className="text-red-400 w-6 h-6" />}
              title="Execution-First Mindset"
              description="We bring delivery leadership, architecture, and action plans from the outset—ready to start, not just plan. Built by experts who’ve led billion-dollar transformations."
              cta="Big Brands talk transformation. We deliver it—with you."
            />
            <WhyThinkRamCard
              icon={<BrainCircuit className="text-red-400 w-6 h-6" />}
              title="Human-Led, AI-Powered"
              description="Curated insights and real-time trend analysis from our platform, paired with delivery expertise. Tailored by domain, role, and local context."
              cta="Traditional analysts give you reports. We give you relevance."
            />
            <WhyThinkRamCard
              icon={<Building className="text-red-400 w-6 h-6" />}
              title="Built for Australia"
              description="Our solutions are locally grounded and globally relevant, with frameworks that adapt to your culture, not impose on it. We simplify delivery without sacrificing governance."
              cta="Large SIs sell armies. We deliver clarity and results."
            />
            <WhyThinkRamCard
              icon={<Scale className="text-red-400 w-6 h-6" />}
              title="Lean, Transparent, and Trusted"
              description="Access a high-trust circle of CXOs and delivery leaders. No bloated teams or endless discovery, just transparent engagements with clear accountability."
              cta="You won’t lose us in a deck. You’ll see us in outcomes."
            />
            <WhyThinkRamCard
              icon={<Handshake className="text-red-400 w-6 h-6" />}
              title="Built to Partner, Not Compete"
              description="We work alongside your vendors, teams, and partners—helping you get the best from your ecosystem. We’re your full-spectrum partner."
              cta="We’re your co-pilot, not a competitor."
            />
            <WhyThinkRamCard
              icon={<GitMerge className="text-red-400 w-6 h-6" />}
              title="A Platform Ready to Empower"
              description="We’re growing a high-trust community with actionable playbooks, checklists, and tools. We embed ethical AI and secure-by-design principles from Day 1."
              cta="Think RAM isn’t just a service—it’s a movement."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            Think RAM Differentiator at a <span className="text-red-500">Glance</span>
          </h2>
          <DifferentiatorTable />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            Meet the <span className="text-red-500">Founders</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Sarah Chen"
              title="Co-Founder & CEO"
              bio="Former Principal at McKinsey Digital, led AI transformations for Fortune 500s. MBA from Wharton."
              imageUrl="/placeholder.svg?width=128&height=128"
              linkedin="#"
              twitter="#"
            />
            <TeamMemberCard
              name="Marcus Rodriguez"
              title="Co-Founder & CTO"
              bio="Ex-Google Cloud Staff Engineer, built large-scale AI platforms. PhD in CS from Stanford."
              imageUrl="/placeholder.svg?width=128&height=128"
              linkedin="#"
              twitter="#"
            />
            <TeamMemberCard
              name="Dr. Priya Patel"
              title="Co-Founder & Chief Strategy Officer"
              bio="Former Chief Architect at Deloitte, specialized in AI governance. PhD in Org. Psychology."
              imageUrl="/placeholder.svg?width=128&height=128"
              linkedin="#"
              twitter="#"
            />
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

      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Join Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            We're looking for passionate individuals to help shape the future of human-AI collaboration.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-red-500 text-white hover:bg-red-500 hover:text-white px-10 py-6 text-base font-semibold bg-transparent"
          >
            <a href="mailto:careers@thinkram.com">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </section>
    </RedWaveLayout>
  )
}
