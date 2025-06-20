"use client";

import { useEffect, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { GradientButton } from "@/components/ui/gradient-button"; // Import new button

// Shader code (vertex and fragment) - kept same as aurora-hero
const vertexShader = `
    void main() {
        gl_Position = vec4(position, 1.0);
    }
`;
const fragmentShader = `
    uniform float iTime;
    uniform vec2 iResolution;
    #define NUM_OCTAVES 3
    float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
    float noise(vec2 p){ vec2 ip=floor(p); vec2 u=fract(p); u=u*u*(3.0-2.0*u); float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y); return res*res; }
    float fbm(vec2 x){ float v=0.0; float a=0.3; vec2 shift=vec2(100); mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50)); for(int i=0;i<NUM_OCTAVES;++i){ v+=a*noise(x); x=rot*x*2.0+shift; a*=0.4; } return v; }
    void main() {
        vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
        vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
        vec2 v; vec4 o = vec4(0.0);
        float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
        for(float i = 0.0; i++ < 35.0;) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
            vec4 auroraColors = vec4(0.1+0.3*sin(i*0.2+iTime*0.4), 0.3+0.5*cos(i*0.3+iTime*0.5), 0.7+0.3*sin(i*0.4+iTime*0.3), 1.0);
            vec4 currentContribution = auroraColors * exp(sin(i*i+iTime*0.8)) / length(max(v, vec2(v.x*f*0.015,v.y*1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
        }
        o = tanh(pow(o / 100.0, vec4(1.6)));
        gl_FragColor = o * 1.5;
    }
`;

interface AuroraLayoutProps {
  children: ReactNode;
  currentPage?: "features" | "pricing" | "about" | "home";
}

export default function AuroraLayout({
  children,
  currentPage,
}: AuroraLayoutProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: Math.random() * 1000 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      material.uniforms.iTime.value += 0.01;
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
    `inter-font text-sm transition-colors ${
      currentPage === page
        ? "text-white font-medium"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="bg-black text-gray-200 min-h-screen inter-font">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-0 block w-full h-full"
      ></canvas>
      <style jsx global>{`
        body {
          margin: 0;
          overflow-x: hidden;
          background: #000;
          font-family: "Inter", sans-serif;
          color: #e5e7eb;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }
        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.4),
            rgba(139, 92, 246, 0.4),
            rgba(59, 130, 246, 0.4)
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          -webkit-mask-composite: xor;
        }
        /* Removed .primary-button, .secondary-button, .nav-glass-button as GradientButton takes over */
        .gradient-text {
          background: linear-gradient(
            135deg,
            #06b6d4 0%,
            #3b82f6 25%,
            #6366f1 75%,
            #ec4899 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .geist-font {
          font-family: "Geist", sans-serif;
        }
        .inter-font {
          font-family: "Inter", sans-serif;
        }
        .divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
        }
      `}</style>
      <nav className="relative z-20 w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between font-mono items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInfinity}
                className="text-white text-sm"
              />
            </div>
            <span className="text-white font-medium text-lg geist-font">
              ThinkRam
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className={navLinkClasses("features")}>
              Features
            </Link>
            <Link href="/pricing" className={navLinkClasses("pricing")}>
              Pricing
            </Link>
            <Link href="/about" className={navLinkClasses("about")}>
              About
            </Link>
          </div>
          <GradientButton
            variant="variant"
            size="sm"
            className="min-w-[100px] px-4 py-2 text-sm"
          >
            {" "}
            {/* Adjusted size for nav */}
            Launching Soon
          </GradientButton>
        </div>
      </nav>
      <div className="relative z-20 divider mb-0"></div>
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 border-t border-white/10 mt-16 md:mt-24 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-md font-semibold text-white mb-4 geist-font">
                ThinkRam
              </h3>
              <p className="text-gray-400 text-sm inter-font">
                The Augment Platform.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 inter-font">
                Platform
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 inter-font">
                Company
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 inter-font">
                Legal
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider my-8"></div>
          <div className="text-center text-gray-500 text-sm inter-font">
            <p>
              &copy; {new Date().getFullYear()} ThinkRam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
