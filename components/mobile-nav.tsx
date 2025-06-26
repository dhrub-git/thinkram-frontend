"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { GradientButton } from "@/components/ui/gradient-button";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileNavProps {
  currentPage?: "features" | "pricing" | "about" | "home" | "partners" | "privacy" | "terms";
}

export default function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const navLinkClasses = (page: string) =>
    `block px-4 py-3 text-lg font-medium transition-colors rounded-lg touch-target ${
      currentPage === page
        ? "text-white bg-white/10"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  // Don't render mobile nav on desktop
  if (!isMobile) return null;

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 safe-area-top safe-area-padding">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center space-x-2" onClick={closeNav}>
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <FontAwesomeIcon icon={faInfinity} className="text-white text-sm" />
            </div>
            <span className="text-white font-medium text-lg geist-font">ThinkRam</span>
          </Link>
          
          <button
            onClick={toggleNav}
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors touch-target tap-highlight-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeNav} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-in-out z-50 safe-area-padding safe-area-top safe-area-bottom ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-white font-medium text-lg geist-font">Menu</span>
            <button
              onClick={closeNav}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors touch-target tap-highlight-none"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-sm" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2 smooth-scroll overflow-y-auto">
            <Link href="/" className={navLinkClasses("home")} onClick={closeNav}>
              Home
            </Link>
            <Link href="/features" className={navLinkClasses("features")} onClick={closeNav}>
              Features
            </Link>
            <Link href="/pricing" className={navLinkClasses("pricing")} onClick={closeNav}>
              Pricing
            </Link>
            <Link href="/partners" className={navLinkClasses("partners")} onClick={closeNav}>
              Partners
            </Link>
            <Link href="/about" className={navLinkClasses("about")} onClick={closeNav}>
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="p-4 space-y-3 border-t border-white/10">
            <GradientButton 
              size="lg" 
              className="w-full justify-center touch-target"
              onClick={closeNav}
            >
              For Professionals
            </GradientButton>
            <GradientButton 
              variant="variant" 
              size="lg" 
              className="w-full justify-center touch-target"
              onClick={closeNav}
            >
              For Enterprise
            </GradientButton>
          </div>

          {/* Footer Links */}
          <div className="p-4 border-t border-white/10">
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors" onClick={closeNav}>
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors" onClick={closeNav}>
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
} 