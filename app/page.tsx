import type React from "react"
import AuroraLayout from "@/components/aurora-layout"
import AuroraHeroContent from "@/components/aurora-hero"
import { ArrowRight } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket, faShieldAlt, faBrain } from "@fortawesome/free-solid-svg-icons"
import { GradientButton } from "@/components/ui/gradient-button" // Import new button
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const GlassCardWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass-card rounded-2xl p-6 md:p-8 text-center md:py-8 ${className || ""}`}>{children}</div>
)

export default function HomePage() {
  return (
    <AuroraLayout currentPage="home">
      <AuroraHeroContent />
      {/* New Section: Built for the Architects of What's Next */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 geist-font tracking-tight">
              Built for the <span className="gradient-text">Architects of What's Next</span>
            </h2>
          </div>

          <Tabs defaultValue="practitioner" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
              <TabsTrigger
                value="practitioner"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-white/10 rounded-lg py-3 px-6 transition-all duration-200 inter-font font-medium"
              >
                The Practitioner
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-white/10 rounded-lg py-3 px-6 transition-all duration-200 inter-font font-medium"
              >
                The Enterprise Leader
              </TabsTrigger>
            </TabsList>

            <TabsContent value="practitioner" className="mt-0">
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <img
                      src="/thoughtful-confident-woman.png"
                      alt="Elena, Principal Program Manager"
                      className="w-full max-w-sm mx-auto rounded-xl object-cover border-2 border-white/20"
                    />
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 geist-font tracking-tight">
                        Elena, Principal Program Manager
                      </h3>
                      <blockquote className="text-lg md:text-xl text-gray-300 italic inter-font leading-relaxed border-l-4 border-blue-400 pl-4 mb-6">
                        "I'm an expert at delivery, but the ground is shifting. I need to know how AI changes my
                        playbook, not just read headlines about it."
                      </blockquote>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 geist-font tracking-tight">
                        Her Challenge:
                      </h4>
                      <p className="text-gray-300 inter-font leading-relaxed mb-6">
                        Elena is at the top of her game, leading complex, multi-million dollar tech projects. But she
                        sees AI tools automating tasks like reporting and resource allocation. Her fear isn't being
                        replaced, but becoming a commodity. To stay valuable, she needs to evolve from a master of
                        process to a strategic advisor who can leverage AI for a competitive advantage.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 geist-font tracking-tight">
                        How ThinkRam Helps Elena:
                      </h4>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 inter-font text-sm">
                            <strong className="text-white">The Pro Community:</strong> A private space to ask peers,
                            "How are you using AI to manage risk on your projects?" without fear of judgment.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 inter-font text-sm">
                            <strong className="text-white">Deep-Dive Insights:</strong> Gets weekly, actionable briefs
                            on how to apply new tools and frameworks to her specific role.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 inter-font text-sm">
                            <strong className="text-white">Opportunity Alerts:</strong> Hears about high-value contracts
                            that require the forward-thinking, strategic skills she's developing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <GradientButton size="lg" className="min-w-[280px]">
                      Join Elena in the Community →
                    </GradientButton>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="enterprise" className="mt-0">
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <img
                      src="/marcus-cio-executive.png"
                      alt="Marcus, Chief Information Officer"
                      className="w-full max-w-sm mx-auto rounded-xl object-cover border-2 border-white/20"
                    />
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 geist-font tracking-tight">
                        Marcus, Chief Information Officer (CIO)
                      </h3>
                      <blockquote className="text-lg md:text-xl text-gray-300 italic inter-font leading-relaxed border-l-4 border-blue-400 pl-4 mb-6">
                        "The board wants an AI strategy yesterday. My vendors are selling me hype, and my teams are
                        using unsanctioned tools. I need ground truth, not buzzwords."
                      </blockquote>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3 geist-font tracking-tight">
                        His Challenge:
                      </h4>
                      <p className="text-gray-300 inter-font leading-relaxed mb-6">
                        Marcus is accountable for the company's entire technology stack and strategy. He's under immense
                        pressure to drive efficiency and innovation with AI, but he's navigating a minefield of risk:
                        data security, compliance, workforce anxiety, and making the wrong multi-million dollar
                        investment. He needs intelligence he can trust and the right talent to execute.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 geist-font tracking-tight">
                        How ThinkRam Helps Marcus:
                      </h4>
                      <div className="space-y-3 mb-8">
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 inter-font text-sm">
                            <strong className="text-white">Enterprise Briefings:</strong> Receives confidential,
                            synthesized intelligence on what's actually working in other large-scale transformations.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 inter-font text-sm">
                            <strong className="text-white">The Market Pulse:</strong> Gets real-time data on talent
                            readiness and tool adoption from the practitioner community, helping him build a realistic
                            roadmap.
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 inter-font text-sm">
                            <strong className="text-white">Trusted Talent Referrals:</strong> When he needs to stand up
                            a new AI governance team, he gets access to ThinkRam's vetted network of delivery-proven
                            experts.
                          </p>
                        </div>
                      </div>
                    </div>

                    <GradientButton variant="variant" size="lg" className="min-w-[280px]">
                      Get the Insights Marcus Trusts →
                    </GradientButton>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className="divider my-8 md:my-12"></div>
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-6 inter-font text-sm">Trusted by professionals from:</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-16 gap-y-4 opacity-60 text-white">
            <span className="text-xl sm:text-2xl font-medium geist-font text-white">Deloitte</span>
            <span className="text-xl sm:text-2xl font-medium geist-font text-white">AWS</span>
            <span className="text-xl sm:text-2xl font-medium geist-font text-white">Google</span>
            <span className="text-xl sm:text-2xl font-medium geist-font text-white">Microsoft</span>
            <span className="text-xl sm:text-2xl font-medium geist-font text-white">Accenture</span>
          </div>
        </div>
      </section>
      <div className="divider my-8 md:my-12"></div>
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <GlassCardWrapper className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 geist-font tracking-tight">
                Become an Augmented Professional
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed inter-font">
                Join a private community of your peers to future-proof your skills, solve complex challenges, and access
                career-defining opportunities in the AI era.
              </p>
              <GradientButton size="sm">
                Explore Community Features
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </GradientButton>
            </GlassCardWrapper>

            <GlassCardWrapper className="text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 geist-font tracking-tight">
                Lead with Confidence
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed inter-font">
                Access real-time 'ground truth' intelligence from elite practitioners to de-risk your AI strategy, close
                the talent gap, and accelerate innovation.
              </p>
              <GradientButton size="sm">
                Explore Enterprise Solutions
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </GradientButton>
            </GlassCardWrapper>
          </div>
        </div>
      </section>
      <div className="divider my-8 md:my-12"></div>
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 geist-font tracking-tight">
              Latest Insights from the <span className="gradient-text">Front Lines</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 inter-font">
              Real perspectives from practitioners navigating the AI transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Is AI Killing the Business Analyst Role?",
                snippet: "How BAs are evolving from requirement gatherers to AI-human workflow architects...",
                author: "Sarah Chen, Principal BA",
                image: "/business-analyst-ai-transformation.png",
              },
              {
                title: "The Project Manager's Guide to AI Governance",
                snippet: "Practical frameworks for managing AI-powered development teams and deliverables...",
                author: "Marcus Rodriguez, Senior PM",
                image: "/ai-governance-framework.png",
              },
              {
                title: "Enterprise Architecture in the Age of LLMs",
                snippet: "Rethinking system design when every component can potentially include AI...",
                author: "Dr. Priya Patel, Chief Architect",
                image: "/enterprise-architecture-llm.png",
              },
            ].map((article) => (
              <GlassCardWrapper key={article.title} className="text-left overflow-hidden p-0">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 geist-font tracking-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 inter-font line-clamp-3">{article.snippet}</p>
                  <p className="text-sm text-blue-400 font-medium inter-font">{article.author}</p>
                </div>
              </GlassCardWrapper>
            ))}
          </div>
        </div>
      </section>
      <div className="divider my-8 md:my-12"></div>
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 geist-font tracking-tight">
            A Complete <span className="gradient-text">Ecosystem</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <GlassCardWrapper>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 geist-font tracking-tight">Peer Sounding Board</h3>
              <p className="text-gray-300 text-sm inter-font">
                Get answers to your toughest project questions from a vetted community of experts.
              </p>
            </GlassCardWrapper>
            <GlassCardWrapper>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-indigo-400 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 geist-font tracking-tight">Real-Time Intelligence</h3>
              <p className="text-gray-300 text-sm inter-font">
                Go beyond analyst reports with 'ground truth' data on what's really happening in tech.
              </p>
            </GlassCardWrapper>
            <GlassCardWrapper>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faBrain} className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 geist-font tracking-tight">Expert Connect</h3>
              <p className="text-gray-300 text-sm inter-font">
                Get matched with specialized consultants for your most critical strategic initiatives.
              </p>
            </GlassCardWrapper>
          </div>
        </div>
      </section>
      <div className="divider my-8 md:my-12"></div>
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16 text-center geist-font tracking-tight">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <GlassCardWrapper className="text-left">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?width=56&height=56"
                  alt="Priya Sharma"
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white/20"
                />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-white text-lg geist-font">Priya Sharma</h4>
                  <p className="text-gray-400 text-sm inter-font">Principal Program Manager</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic inter-font leading-relaxed">
                "The Augment Platform is my secret weapon. It's the first place I go when I have a question I can't ask
                my client. The insights are invaluable."
              </blockquote>
            </GlassCardWrapper>
            <GlassCardWrapper className="text-left">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?width=56&height=56"
                  alt="David Chen"
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white/20"
                />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-white text-lg geist-font">David Chen</h4>
                  <p className="text-gray-400 text-sm inter-font">VP of Technology</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic inter-font leading-relaxed">
                "The intelligence briefings are invaluable. They cut through the hype and help me focus my team on what
                actually matters for our AI strategy."
              </blockquote>
            </GlassCardWrapper>
          </div>
        </div>
      </section>
      <div className="divider my-8 md:my-12"></div>
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 geist-font tracking-tight">
            Ready to Shape the <span className="gradient-text">Future of Work?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 inter-font max-w-2xl mx-auto">
            Join ThinkRam today and become part of a community dedicated to navigating the AI revolution, together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GradientButton size="lg" className="min-w-[240px]">
              Join the Community (Free)
            </GradientButton>
            <GradientButton variant="variant" size="lg" className="min-w-[240px]">
              Request an Enterprise Demo
            </GradientButton>
          </div>
        </div>
      </section>
    </AuroraLayout>
  )
}
