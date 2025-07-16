"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Menu,
  X,
  Home,
  Users,
  Building2,
  Handshake,
  Info,
  Phone,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const vertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;
const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

#define NUM_OCTAVES 4
float fbm ( in vec2 st) {
    float value = 0.0;
    float amplitude = .5;
    for (int i = 0; i < NUM_OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;
    
    float t = iTime * 0.05; // Slower animation speed

    // Create a moving, distorted coordinate system
    vec2 st = uv;
    st.x += t * 0.2;
    st.y += sin(t * 0.5) * 0.1;

    // Generate a base noise pattern
    float n = fbm(st * 1.2);

    // Create soft, smoky waves
    float wave = smoothstep(0.4, 0.6, n);
    
    // Softer, deeper red color palette
    vec3 color = vec3(0.5, 0.05, 0.1) * wave;

    // Add a subtle secondary layer for depth
    float n2 = fbm(st * 2.5 + 10.0);
    color += vec3(0.2, 0.0, 0.0) * smoothstep(0.5, 0.7, n2);

    // Vignette to darken the edges and focus the view
    float vignette = 1.0 - smoothstep(0.7, 1.5, length(uv));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
}
`;

interface RedWaveLayoutProps {
  children: ReactNode;
  currentPage?: string;
}

export default function RedWaveLayout({
  children,
  currentPage,
}: RedWaveLayoutProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    const clock = new THREE.Clock();
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      material.uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    }

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) (mesh.material as THREE.Material).dispose();
    };
  }, []);

  const navLinkClasses = (page: string) =>
    `text-sm transition-colors ${
      currentPage === page
        ? "text-red-500 font-medium"
        : "text-white hover:text-red-400"
    }`;

  return (
    <div className="bg-black text-white min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-0 block w-full h-full"
      ></canvas>
      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full px-6 py-4 bg-black/80 backdrop-blur-sm z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src="/thinkram-logo-white.png"
                alt="ThinkRam Logo"
                width={isMobile ? 150 : 200}
                height={isMobile ? 37 : 50}
                className="logo-outline"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className={navLinkClasses("home")}>
                Home
              </Link>
              <Link
                href="/professionals"
                className={navLinkClasses("professionals")}
              >
                For Professionals
              </Link>
              <Link href="/services" className={navLinkClasses("services")}>
                For Enterprises
              </Link>
              <Link href="/partners" className={navLinkClasses("partners")}>
                For Partners
              </Link>
              <Link href="/about" className={navLinkClasses("about")}>
                About
              </Link>
              <Link href="/contact" className={navLinkClasses("contact")}>
                Contact
              </Link>
            </nav>

            {/* Desktop Join Us Button */}
            <Button
              variant="outline"
              asChild
              className="hidden md:block border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
            >
              <Link href="/membership">Join Us</Link>
            </Button>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="outline"
                asChild
                size="sm"
                className="border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
              >
                <Link href="/membership">Join Us</Link>
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-red-400 p-2"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-black/95 border-white/10"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    <Link
                      href="/"
                      className="flex items-center space-x-3 text-lg text-white hover:text-red-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Home size={20} className="text-white" />
                      <span>Home</span>
                    </Link>
                    <Link
                      href="/professionals"
                      className="flex items-center space-x-3 text-lg text-white hover:text-red-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Users size={20} className="text-white" />
                      <span>For Professionals</span>
                    </Link>
                    <Link
                      href="/services"
                      className="flex items-center space-x-3 text-lg text-white hover:text-red-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Building2 size={20} className="text-white" />
                      <span>For Enterprises</span>
                    </Link>
                    <Link
                      href="/partners"
                      className="flex items-center space-x-3 text-lg text-white hover:text-red-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Handshake size={20} className="text-white" />
                      <span>For Partners</span>
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center space-x-3 text-lg text-white hover:text-red-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Info size={20} className="text-white" />
                      <span>About</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center space-x-3 text-lg text-white hover:text-red-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone size={20} className="text-white" />
                      <span>Contact</span>
                    </Link>

                    <div className="pt-6 border-t border-white/10">
                      <Button
                        variant="outline"
                        asChild
                        className="w-full border-red-500 text-white hover:bg-red-500 hover:text-white bg-transparent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href="/membership">Join Us</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <main className="pt-24">{children}</main>
        <footer className="border-t border-white/10 mt-16 md:mt-24 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1 mb-6 md:mb-0">
                <Link href="/" className="inline-block mb-4">
                  <Image
                    src="/thinkram-logo-white.png"
                    alt="ThinkRam Logo"
                    width={200}
                    height={50}
                    className="logo-outline"
                  />
                </Link>
                <p className="text-gray-400 text-sm">
                  Realise. Accelerate. Modernise.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/professionals"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      For Professionals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      For Enterprises
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      For Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/membership"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Membership
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Legal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Social
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    <span className="sr-only">X</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
              <p>
                &copy; {new Date().getFullYear()} ThinkRam. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
