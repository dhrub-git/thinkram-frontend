"use client";

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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

// Form validation schema matching API route
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      reset(); // Clear form on success
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <RedWaveLayout currentPage="contact">
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Have questions about enterprise engagement, partnership
            opportunities, or getting started with Think RAM? We’re here to
            help.
            <br />
            Reach out — let’s start the conversation
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 tracking-tight">
              Send us a Message
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 sm:space-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12 text-base ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12 text-base ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company (Optional)"
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-12 text-base ${
                    errors.company ? "border-red-500" : ""
                  }`}
                  {...register("company")}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className={`bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-base min-h-[120px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="w-full border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent h-12 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
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
                <p className="text-red-400 text-sm sm:text-base leading-relaxed">
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
