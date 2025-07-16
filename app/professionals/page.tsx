import type React from "react";
import RedWaveLayout from "@/components/red-wave-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Star,
  Users,
  Zap,
  TrendingUp,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 text-left h-full">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-3 sm:mb-4">
      {icon}
    </div>
    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const DifferentiatorTable = () => {
  const data = [
    {
      capability: "Signal vs. Noise",
      thinkram: "High-signal, curated insights. Built for action, not noise.",
      social:
        "High-noise, algorithm-driven feed. Hard to find relevant content.",
      courses: "Structured but generic content. Lacks real-time relevance.",
    },
    {
      capability: "Network Quality",
      thinkram: "Trusted, vetted community of peers, leaders, and CXOs.",
      social: "Vast but unvetted network. Quantity over quality.",
      courses:
        "Primarily a solo learning experience with limited peer interaction.",
    },
    {
      capability: "Content Focus",
      thinkram:
        "Real-world execution frameworks, role-specific playbooks, and strategic context.",
      social:
        "User-generated content of varying quality. Mostly self-promotion.",
      courses:
        "Theoretical knowledge and technical skills. Lacks strategic application.",
    },
    {
      capability: "Career Impact",
      thinkram:
        "Credibility, visibility, and access to high-impact opportunities and mentorship.",
      social: "Primarily for job searching and maintaining a public profile.",
      courses:
        "Adds certifications to a resume. Impact depends on self-application.",
    },
    {
      capability: "Real-World Application",
      thinkram:
        "Directly applicable frameworks from billion-dollar programs. Solve today's problems.",
      social:
        "Networking can lead to opportunities, but content is rarely actionable.",
      courses:
        "Teaches 'how' but often misses the 'why' and 'when' of enterprise reality.",
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm text-left text-gray-300">
          <thead className="text-xs text-white uppercase bg-white/5">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-tl-lg w-1/4">
                Capability
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center bg-red-900/20 w-1/4"
              >
                Think RAM
              </th>
              <th scope="col" className="px-6 py-3 text-center w-1/4">
                Generic Social Networks
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center rounded-tr-lg w-1/4"
              >
                Online Course Platforms
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-black/20 border-b border-white/10">
                <th scope="row" className="px-6 py-4 font-medium text-white">
                  {row.capability}
                </th>
                <td className="px-6 py-4 text-green-400 font-semibold text-center bg-red-900/20">
                  {row.thinkram}
                </td>
                <td className="px-6 py-4 text-center">{row.social}</td>
                <td className="px-6 py-4 text-center">{row.courses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet Cards */}
      <div className="lg:hidden space-y-4 sm:space-y-6">
        {data.map((row, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4"
          >
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/10 pb-2 sm:pb-3">
              {row.capability}
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-3 sm:p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">
                  Think RAM
                </h4>
                <p className="text-xs sm:text-sm text-green-400 font-medium leading-relaxed">
                  {row.thinkram}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-black/20 border border-white/10 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">
                    Generic Social Networks
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {row.social}
                  </p>
                </div>

                <div className="bg-black/20 border border-white/10 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">
                    Online Course Platforms
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {row.courses}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProfessionalsPage() {
  return (
    <RedWaveLayout currentPage="professionals">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Being skilled isn’t enough. <br />
            <span className="text-red-500">You need to be relevant.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Think RAM exists for professionals like you—those who want to shape
            the future, not just survive it. We’re a trusted, high-impact
            community of tech experts, CIOs, and delivery leaders, designed to
            help you find clarity, credibility, and career acceleration.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-red-500 text-white hover:bg-red-500 hover:text-white px-10 py-6 text-base font-semibold bg-transparent"
          >
            <Link href="/membership">Explore Membership</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            What You Gain as a Think RAM Member
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <BenefitCard
              icon={<Zap className="text-red-400 w-6 h-6" />}
              title="Curated Insight Streams"
              description="Stay ahead with role-specific insights on emerging tech and AI trends. No hype, just what matters for your career."
            />
            <BenefitCard
              icon={<ShieldCheck className="text-red-400 w-6 h-6" />}
              title="Actionable Frameworks"
              description="Access real transformation frameworks and playbooks used in billion-dollar programs to solve complex, real-world problems."
            />
            <BenefitCard
              icon={<Users className="text-red-400 w-6 h-6" />}
              title="High-Trust Community"
              description="Engage with a vetted network of peers and leaders. Get mentorship, solve challenges, and build meaningful connections."
            />
            <BenefitCard
              icon={<Star className="text-red-400 w-6 h-6" />}
              title="Community Recognition"
              description="Gain visibility and credibility through contribution pathways, including participation in events, podcasts, and roundtables."
            />
            <BenefitCard
              icon={<TrendingUp className="text-red-400 w-6 h-6" />}
              title="Career Acceleration"
              description="Get early access to projects, partners, and market-shaping conversations that put you at the forefront of the industry."
            />
            <BenefitCard
              icon={<BrainCircuit className="text-red-400 w-6 h-6" />}
              title="CXO-Level Thinking"
              description="Understand the enterprise perspective by engaging with content and leaders who are shaping top-level strategy."
            />
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            Think RAM vs. The <span className="text-red-500">Alternatives</span>
          </h2>
          <DifferentiatorTable />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            You’ve worked hard to build your skills.
            <br />
            Now, let’s{" "}
            <span className="text-red-500">amplify your impact.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Think RAM isn’t just a network. It’s a movement—designed to put
            trusted, capable, and forward-thinking tech professionals at the
            centre of Australia’s transformation story.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-xl font-semibold text-white">
              Be relevant. Be visible. Be valued.
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-red-500 text-white hover:bg-red-500 hover:text-white px-10 py-6 text-base font-semibold bg-transparent"
            >
              <Link href="/membership">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </section>
    </RedWaveLayout>
  );
}
