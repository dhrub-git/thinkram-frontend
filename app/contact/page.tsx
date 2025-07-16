import RedWaveLayout from "@/components/red-wave-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <RedWaveLayout currentPage="contact">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            We're here to answer your questions, discuss partnership
            opportunities, or help you get started. Reach out and let's talk.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 tracking-tight">
              Send us a Message
            </h2>
            <form className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12 text-base"
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
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12 text-base"
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
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-base min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                variant="outline"
                className="w-full border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent h-12 text-base font-semibold"
                size="lg"
              >
                Submit Message
              </Button>
            </form>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-red-400 text-lg sm:text-xl"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                  Email Us
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed">
                  For general inquiries, support, or feedback.
                </p>
                <a
                  href="mailto:hello@thinkram.com"
                  className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base break-all sm:break-normal"
                >
                  hello@thinkram.com
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-red-400 text-lg sm:text-xl"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                  Call Us
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed">
                  Speak with a member of our team directly.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                  <a
                    href="tel:1300901098"
                    className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
                  >
                    1300 901 098
                  </a>
                  <span className="text-gray-300 text-sm sm:text-base hidden sm:inline">
                    or
                  </span>
                  <a
                    href="tel:0405924778"
                    className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base"
                  >
                    0405 924 778
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-400 text-lg sm:text-xl"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                  Our Office
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  300 Barangaroo Avenue, Sydney, NSW 2000, Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RedWaveLayout>
  );
}
