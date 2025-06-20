"use client"

import AuroraLayout from "@/components/aurora-layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faComments,
  faBookOpen,
  faNetworkWired,
  faChartLine,
  faLightbulb,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons"

const FeatureCard = ({
  icon,
  title,
  description,
  iconColor = "text-blue-400",
}: { icon: any; title: string; description: string; iconColor?: string }) => (
  <div className="glass-card rounded-2xl p-6 md:p-8 text-left">
    <div
      className={`w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6`}
    >
      <FontAwesomeIcon icon={icon} className={`${iconColor} text-xl`} />
    </div>
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 geist-font tracking-tight">{title}</h3>
    <p className="text-gray-300 inter-font leading-relaxed text-sm">{description}</p>
  </div>
)

export default function FeaturesPage() {
  return (
    <AuroraLayout currentPage="features">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 geist-font tracking-tight">
            Platform <span className="gradient-text">Features</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto inter-font mb-12 md:mb-16">
            Discover the comprehensive suite of tools and resources ThinkRam offers to augment your expertise and
            accelerate AI-driven success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* For Professionals */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 md:mb-12 text-center geist-font tracking-tight">
              For <span className="gradient-text">Professionals</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={faComments}
                title="Community Q&A Forum"
                description="Connect with peers, ask tough questions, and share your expertise in a private, moderated space. Solve niche problems and get unbiased advice."
                iconColor="text-cyan-400"
              />
              <FeatureCard
                icon={faBookOpen}
                title="Resource Library"
                description="Access a curated repository of community-vetted templates, frameworks, checklists, and best practices for AI projects and career development."
                iconColor="text-green-400"
              />
              <FeatureCard
                icon={faNetworkWired}
                title="Career Evolution Guidance"
                description="Stay ahead of the curve with insights on emerging roles, skill demands, and strategies to future-proof your career in the age of AI."
                iconColor="text-purple-400"
              />
            </div>
          </div>

          {/* For Enterprise */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 md:mb-12 text-center geist-font tracking-tight">
              For <span className="gradient-text">Enterprise</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={faChartLine}
                title="CXO Intelligence Briefings"
                description="Receive concise, bi-weekly reports synthesizing 'ground truth' from the community into strategic, decision-ready intelligence for leaders."
                iconColor="text-blue-400"
              />
              <FeatureCard
                icon={faLightbulb}
                title="Ground Truth Dashboard"
                description="View anonymized, aggregated data from the community on trending skills, project pain points, and vendor sentiment for unique market insights."
                iconColor="text-yellow-400"
              />
              <FeatureCard
                icon={faUsersCog}
                title="Expert Connect Concierge"
                description="Quickly find and engage vetted experts from the community for short-term advisory, strategic initiatives, or specialized project needs."
                iconColor="text-pink-400"
              />
            </div>
          </div>
        </div>
      </section>
    </AuroraLayout>
  )
}
