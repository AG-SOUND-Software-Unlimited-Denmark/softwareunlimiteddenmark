import { createFileRoute } from "@tanstack/react-router";
import { NebulaEffect } from "~/components/NebulaEffect";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section - Antimatter style */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 md:py-32">
        {/* Central glowing orb / nebula effect - enhanced layered SVG */}
        <NebulaEffect />

        {/* Subtle watermark text in background */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]"
          aria-hidden
        >
          <span className="text-[ clamp(6rem, 20vw, 14rem)] font-bold tracking-tighter uppercase">
            AG-SOUND
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">
            Software Unlimited Denmark
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
            Creating{" "}
            <span className="text-glow font-semibold text-white">
              Digital Solutions
            </span>
            <br />
            That Matter
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            We enable organizations with software that transforms complex
            challenges into tangible results. Software Unlimited Denmark.
          </p>
          <a href="#contact" className="btn-primary text-white inline-block">
            Start Your Project
          </a>
        </div>

        {/* Stats Section - like Antimatter */}
        <div className="relative z-10 mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-glow-subtle mb-2">
              29+
            </p>
            <p className="text-sm uppercase tracking-widest text-white/50">
              Projects Delivered
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-glow-subtle mb-2">
              96%
            </p>
            <p className="text-sm uppercase tracking-widest text-white/50">
              Client Satisfaction
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-semibold text-glow-subtle mb-2">
              7/7
            </p>
            <p className="text-sm uppercase tracking-widest text-white/50">
              Support Available
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Showcase - our current demo projects */}
      <section
        id="showcase"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-2">
            Live now
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            2026 Showcase
          </h2>
          <p className="text-white/60 max-w-2xl mb-12">
            Apps we're showcasing this year. Try them live.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://macremotecontroller.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 hover:border-white/15 transition-all group block"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                Mac Remote Controller
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Control your Mac remotely from any device.
              </p>
              <span className="text-sm text-accent font-medium">
                Visit site →
              </span>
            </a>
            <a
              href="https://casechronicles.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 hover:border-white/15 transition-all group block"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                Case Chronicles
              </h3>
              <p className="text-white/60 text-sm mb-4">
                Document and share case studies.
              </p>
              <span className="text-sm text-accent font-medium">
                Visit site →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services preview section */}
      <section
        id="services"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            Our Services
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            We offer comprehensive digital solutions that transform your
            business and drive innovation across every touchpoint.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Product Design",
                desc: "End-to-end product design—from research and UX flows to polished UI systems.",
              },
              {
                num: "02",
                title: "Development",
                desc: "Robust, scalable products across web and mobile—from elegant UIs to reliable APIs.",
              },
              {
                num: "03",
                title: "AI & Innovation",
                desc: "Build production-ready AI—from rapid prototyping to deployed solutions.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="glass rounded-2xl p-8 hover:border-white/10 transition-colors"
              >
                <span className="text-sm text-white/40 font-mono">
                  {item.num}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="relative py-24 px-6 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            We turn bold ideas into
            <br />
            <span className="text-glow">powerful digital realities.</span>
          </h2>
          <p className="text-white/60 mb-8">Let's work together</p>
          <a
            href="mailto:contact@ag-sound.com"
            className="btn-primary text-white inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-white/90">AG-SOUND</span>
            <span className="text-white/50 text-sm ml-2">
              Software Unlimited Denmark
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="/careers"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Careers
            </a>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} AG-SOUND. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
