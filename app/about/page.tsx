import AuroraLayout from "@/components/aurora-layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { GradientButton } from "@/components/ui/gradient-button" // Import new button

const TeamMemberCard = ({
  name,
  title,
  bio,
  imageUrl,
  linkedin,
  twitter,
}: { name: string; title: string; bio: string; imageUrl: string; linkedin?: string; twitter?: string }) => (
  <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
    <img
      src={imageUrl || "/placeholder.svg"}
      alt={name}
      className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-2 border-white/20 object-cover"
    />
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 geist-font tracking-tight">{name}</h3>
    <p className="text-blue-400 inter-font text-sm mb-4">{title}</p>
    <p className="text-gray-300 text-sm inter-font mb-6 leading-relaxed">{bio}</p>
    <div className="flex justify-center space-x-4">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      )}
    </div>
  </div>
)

export default function AboutPage() {
  return (
    <AuroraLayout currentPage="about">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 geist-font tracking-tight">
            Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto inter-font mb-12 md:mb-16 leading-relaxed">
            We believe human ingenuity is the driving force of progress. Our mission is to build the tools and community
            that allow it to flourish in the age of AI, amplifying human expertise, not replacing it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center geist-font tracking-tight">
            The Founding Story
          </h2>
          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-4 text-gray-300 inter-font text-sm md:text-base leading-relaxed">
            <p>
              ThinkRam was founded recognizing a critical gap: while many feared AI replacing jobs, we saw its true
              potential in augmenting human expertise.
            </p>
            <p>
              Independent professionals felt isolated, needing a trusted space to navigate AI's impact on their work.
              Enterprise leaders, overwhelmed by hype, sought 'ground truth' from practitioners. ThinkRam bridges this
              gap, fostering a symbiotic ecosystem for shared growth and innovation.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center geist-font tracking-tight">
            Meet the Founders
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

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 geist-font tracking-tight">
            Join Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 inter-font">
            We're looking for passionate individuals to help shape the future of human-AI collaboration.
          </p>
          <GradientButton
            asChild
            size="lg" // Using asChild to make the link itself the button
          >
            <a href="mailto:careers@thinkram.com">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" /> {/* Adjusted icon size */}
              Contact Us
            </a>
          </GradientButton>
        </div>
      </section>
    </AuroraLayout>
  )
}
