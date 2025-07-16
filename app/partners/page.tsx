"use client";

import type React from "react";

import RedWaveLayout from "@/components/red-wave-layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Handshake, Target, TrendingUp, Eye } from "lucide-react";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";

const partnerFaqs = [
  {
    q: "How does Think RAM support go-to-market (GTM) for technology and service companies?",
    a: "We offer tailored GTM strategy, local relevance mapping, and access to decision-makers through our curated ecosystem.",
  },
  {
    q: "What is included in the Partner Circle subscription?",
    a: "Strategic advisory, product roadmap support, thought leadership promotion, high-trust CXO access, and platform visibility.",
  },
  {
    q: "How does Think RAM introduce partners to enterprise or government leaders?",
    a: "We facilitate high-trust, curated introductions based on strategic alignment, not just sales intent.",
  },
  {
    q: "Can Think RAM help us position for public sector work in Australia?",
    a: "Yes. We understand government procurement, compliance, and stakeholder management. We help you navigate and engage effectively.",
  },
  {
    q: "What kind of product feedback or roadmap support do partners receive?",
    a: "We provide hands-on feedback from experienced transformation leaders to ensure your offering aligns with real-world demand and enterprise pain points.",
  },
];

const WhyPartnerCard = ({
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

const ServiceCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 h-full">
    <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 leading-tight">
      {title}
    </h4>
    <ul className="space-y-2 sm:space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-300 text-xs sm:text-sm leading-relaxed"
        >
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function PartnersPage() {
  return (
    <RedWaveLayout currentPage="partners">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Partner with <span className="text-red-500">Think RAM</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help tech product and service partners build credibility, gain
            traction, and scale impact across public and private sectors—not
            just by advising, but by enabling action.
          </p>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            Why Partners Choose Think RAM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyPartnerCard
              icon={<Target className="text-red-400 w-6 h-6" />}
              title="Strategic Positioning"
              description="Not just introductions—real context, prep, and positioning to ensure you meet the right people, the right way."
            />
            <WhyPartnerCard
              icon={<TrendingUp className="text-red-400 w-6 h-6" />}
              title="Refined GTM"
              description="Leverage our real-world delivery knowledge to refine what works, sharpen your message, and accelerate your sales cycle."
            />
            <WhyPartnerCard
              icon={<Handshake className="text-red-400 w-6 h-6" />}
              title="High-Trust Access"
              description="Gain meaningful access to a high-trust executive network that is typically hard to reach and slow to build."
            />
            <WhyPartnerCard
              icon={<Eye className="text-red-400 w-6 h-6" />}
              title="Credible Visibility"
              description="We provide a platform that gives you strategic visibility—backed by the credibility of the Think RAM brand."
            />
          </div>
        </div>
      </section>

      {/* Partner Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
            Our Partner Enablement Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="GTM Strategy & Positioning"
              items={[
                "Market validation",
                "Competitive differentiation",
                "Go-to-market planning",
                "Insight-based marketing",
              ]}
            />
            <ServiceCard
              title="Strategic Advisory"
              items={[
                "Fractional CIO / CTO services",
                "Product strategy & scaling",
                "Investor & board readiness",
              ]}
            />
            <ServiceCard
              title="Product Enablement"
              items={[
                "Roadmap development",
                "Use-case localisation",
                "UX/usability advisory",
              ]}
            />
            <ServiceCard
              title="Growth & Network Access"
              items={[
                "High-trust CXO introductions",
                "Co-creation & pilot facilitation",
                "Podcast & roundtable exposure",
              ]}
            />
            <ServiceCard
              title="Capability Uplift"
              items={[
                "Founder & tech lead mentoring",
                "Product demo refinement",
                "Strategic content creation",
              ]}
            />
            <ServiceCard
              title="Platform Visibility"
              items={[
                "Access to Think RAM insights",
                "Promotion on Think RAM channels",
                "Co-branded thought leadership",
              ]}
            />
          </div>
        </div>
      </section>

      <FaqSection
        title={
          <>
            For <span className="text-red-500">Partners</span>
          </>
        }
        faqs={partnerFaqs}
      />

      {/* Featured Partners */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Our Valued Partners
          </h2>
          <p className="text-gray-400 mb-8">
            We collaborate with industry leaders to drive innovation. (Logos are
            for demonstration purposes).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-x-12 xl:gap-x-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="/techcorp-logo.png"
              alt="TechCorp Logo"
              className="h-8 sm:h-10 mx-auto lg:mx-0"
            />
            <img
              src="/placeholder-3h0yl.png"
              alt="Innovate Solutions Logo"
              className="h-8 sm:h-10 mx-auto lg:mx-0"
            />
            <img
              src="/placeholder-oh7ch.png"
              alt="DataDriven Inc Logo"
              className="h-8 sm:h-10 mx-auto lg:mx-0"
            />
            <img
              src="/cloudpioneers-logo.png"
              alt="CloudPioneers Logo"
              className="h-8 sm:h-10 mx-auto lg:mx-0"
            />
            <img
              src="/quantumleap-logo.png"
              alt="QuantumLeap Logo"
              className="h-8 sm:h-10 mx-auto lg:mx-0"
            />
            <img
              src="/synergy-systems-logo.png"
              alt="Synergy Systems Logo"
              className="h-8 sm:h-10 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Ready to{" "}
            <span className="text-red-500">Accelerate Your Growth?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's explore how a partnership with Think RAM can open doors, build
            credibility, and drive real impact.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-red-500 text-white hover:bg-red-500 hover:text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-6 text-sm sm:text-base font-semibold bg-transparent w-full sm:w-auto"
          >
            <Link href="/contact">Become a Partner</Link>
          </Button>
        </div>
      </section>
    </RedWaveLayout>
  );
}
