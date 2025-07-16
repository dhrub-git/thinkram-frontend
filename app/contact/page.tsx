import RedWaveLayout from "@/components/red-wave-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export default function ContactPage() {
  return (
    <RedWaveLayout currentPage="contact">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            We're here to answer your questions, discuss partnership opportunities, or help you get started. Reach out
            and let's talk.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 tracking-tight font-semibold">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                type="submit"
                variant="outline"
                className="w-full border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
                size="lg"
              >
                Submit Message
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex items-start space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-red-400 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white font-semibold">Email Us</h3>
                <p className="text-gray-300">For general inquiries, support, or feedback.</p>
                <a href="mailto:contact@thinkram.com" className="text-red-400 hover:text-red-300 transition-colors">
                  contact@thinkram.com
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex items-start space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-red-400 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white font-semibold">Call Us</h3>
                <p className="text-gray-300">Speak with a member of our team directly.</p>
                <a href="tel:+1234567890" className="text-red-400 hover:text-red-300 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex items-start space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white font-semibold">Our Office</h3>
                <p className="text-gray-300">123 Innovation Drive, Tech City, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RedWaveLayout>
  )
}
