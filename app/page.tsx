"use client"

import type React from "react"
import RedWaveLayout from "@/components/red-wave-layout"
import { Button } from "@/components/ui/button"
import {
  Users,
  BarChart,
  Handshake,
  CheckCircle,
  Target,
  Package,
  Globe,
  FileText,
  Network,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ReportCard } from "@/components/report-card"

const FlippableCard = ({
  icon,
  title,
  description,
  details,
  ctaText,
  ctaLink,
}: {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  ctaText: string
  ctaLink: string
}) => (
  <div className="flip-card h-[280px] group">
    <div className="flip-card-inner">
      {/* Front of Card */}
      <div className="flip-card-front bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm">
        {icon}
        <h3 className="text-xl font-bold text-white mt-4 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="absolute bottom-4 text-xs text-gray-400 group-hover:opacity-0 transition-opacity">
          Hover to see more
        </div>
      </div>
      {/* Back of Card */}
      <div className="flip-card-back bg-gray-900/80 border border-red-500/50 p-6 flex flex-col justify-between text-left backdrop-blur-md">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
          <ul className="space-y-2">
            {details.map((item, i) => (
              <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="mt-4 w-full border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  </div>
)

const Differentiator = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
    {icon}
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
)

export default function HomePage() {
  return (
    <RedWaveLayout currentPage="home">
      {/* 1. Hero Section */}
      <section className="relative z-10 w-full min-h-[calc(80vh)] flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Augmenting Expertise. Empowering Action.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Think RAM is where tech professionals, enterprise leaders, and partners turn strategy into outcomes.
            Human-led, AI-powered, and purpose-built for transformation that sticks.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-red-500 text-white hover:bg-red-500 hover:text-white px-10 py-6 text-base font-semibold bg-transparent"
          >
            <Link href="/membership">Join Us</Link>
          </Button>
        </div>
      </section>

      {/* 2. Who We Empower */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Who We Empower</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Whether you’re a professional ready to elevate your career, an enterprise looking for program rescue or a
            partner trying to enter the public sector—we’ve got a pathway for you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FlippableCard
              icon={<Users className="w-12 h-12 text-red-400" />}
              title="Tech Professionals"
              description="Stay relevant, visible, and AI-ready."
              details={[
                "Curated insight streams",
                "Execution-ready frameworks",
                "Mentoring & community",
                "Recognition & publishing",
              ]}
              ctaText="For Professionals"
              ctaLink="/professionals"
            />
            <FlippableCard
              icon={<BarChart className="w-12 h-12 text-red-400" />}
              title="Enterprise Leaders"
              description="Bridge the strategy-execution gap with confidence."
              details={[
                "Business case design & review",
                "PMO setup & assurance",
                "Project rescue",
                "AI-first frameworks",
                "Agile oversight",
              ]}
              ctaText="For Enterprises"
              ctaLink="/services"
            />
            <FlippableCard
              icon={<Handshake className="w-12 h-12 text-red-400" />}
              title="Partners"
              description="Gain traction with CXO access and GTM clarity."
              details={[
                "Go-to-market refinement",
                "Product-market fit alignment",
                "CXO access & roundtables",
                "Visibility via Think RAM",
              ]}
              ctaText="For Partners"
              ctaLink="/partners"
            />
          </div>
        </div>
      </section>

      {/* 3. Think RAM Framework */}
      <section id="framework" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Think RAM Framework
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Our RAM Framework drives every transformation forward with clarity and confidence.
          </p>
          <div className="mb-12">
            <Image
              src="/ram-framework-v2.png"
              alt="Realise, Accelerate, Modernise Framework Infographic"
              width={1200}
              height={400}
              className="w-full max-w-5xl mx-auto"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-red-500 mb-2">Realise</h3>
              <p className="text-gray-300">Define vision. Align roadmaps. Build readiness.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-red-500 mb-2">Accelerate</h3>
              <p className="text-gray-300">Execute fast. Deliver outcomes. Reduce risk.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-red-500 mb-2">Modernise</h3>
              <p className="text-gray-300">Sustain success. Embed governance. Scale capability.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-red-500 text-white hover:bg-red-500 hover:text-white px-10 py-6 text-base font-semibold bg-transparent"
            >
              <Link href="/services">Explore the Model</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why Think RAM */}
      <section id="why-us" className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                We don’t just advise. <span className="text-red-500">We deliver.</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                While others sell frameworks, reports, or theory, Think RAM exists to solve the execution crisis in tech
                and digital transformation. With 20+ years of lived experience and over $2B in transformation programs
                delivered, we’ve seen it all—and we’ve built what’s missing.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <Differentiator icon={<Target className="w-5 h-5 text-red-400" />} text="Execution-first mindset" />
                <Differentiator icon={<Package className="w-5 h-5 text-red-400" />} text="End-to-end value" />
                <Differentiator icon={<Globe className="w-5 h-5 text-red-400" />} text="Built for Australia" />
                <Differentiator icon={<FileText className="w-5 h-5 text-red-400" />} text="Frameworks you can use" />
                <Differentiator icon={<Network className="w-5 h-5 text-red-400" />} text="Embedded trust network" />
                <Differentiator icon={<ShieldCheck className="w-5 h-5 text-red-400" />} text="Ethically governed" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 text-center">
                <p className="text-5xl md:text-6xl font-extrabold text-red-500">75%</p>
                <p className="text-lg text-white font-semibold mt-2">
                  of tech transformations still fail. We’re here to change that.
                </p>
              </div>
              <Image
                src="/why-thinkram-v2.png"
                alt="Abstract network infographic representing trust and execution"
                width={500}
                height={250}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="insights" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Latest Insights & <span className="text-red-500">Reports</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Actionable intelligence from our community and delivery experts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <ReportCard
              imageUrl="/images/report-build-buy-partner.png"
              category="For Enterprises"
              title="The Strategic Triangle: Build vs. Buy vs. Partner"
              description="Navigate the critical choice of developing in-house, buying off-the-shelf, or partnering with our comprehensive decision-making framework."
              link="/membership"
            />
            <ReportCard
              imageUrl="/images/report-api-resilience.png"
              category="For Professionals"
              title="Mastering Resilience: API Rate Limiting & Circuit Breakers"
              description="A deep dive into two essential patterns for building robust, fault-tolerant microservices that can withstand unpredictable failures."
              link="/membership"
            />
            <ReportCard
              imageUrl="/images/report-ai-governance.png"
              category="For Enterprises"
              title="The AI Governance Blueprint: Building Trust & Mitigating Risk"
              description="Establish a robust governance framework for responsible AI—from ethical principles and data privacy to model transparency and compliance."
              link="/membership"
            />
          </div>
        </div>
      </section>
    </RedWaveLayout>
  )
}
