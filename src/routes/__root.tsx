/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import logoSvg from "~/assets/favicon.svg?url";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "AG-SOUND | Software Unlimited Denmark",
        description:
          "Building digital solutions that matter. Software Unlimited Denmark – innovative software development and digital solutions.",
        keywords:
          "AG-SOUND, Software Unlimited Denmark, software development, digital solutions",
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg?v=2",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#0a0a0f" },
    ],
    scripts: [
      {
        src: "/customScript.js",
        type: "text/javascript",
        defer: true,
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {/* Light rays / lens flare - top left */}
        <div
          className="fixed inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden
        >
          <div
            className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute top-0 left-0 w-96 h-96 opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Navigation - liquid glass style */}
        <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors leading-tight">
                  AG-SOUND
                </span>
                <span className="text-xs text-white/50 hidden sm:inline">
                  Software Unlimited Denmark
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              {/* Demo 2026 dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 py-2 cursor-pointer"
                >
                  Demo 2026
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                  }`}
                >
                  <div className="glass rounded-lg py-1 min-w-[200px] shadow-xl">
                    <a
                      href="https://macremotecontroller.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Mac Remote Controller
                    </a>
                    <a
                      href="https://casechronicles.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Case Chronicles
                    </a>
                  </div>
                </div>
              </div>
              <a href="/#contact" className="btn-primary text-white text-sm">
                Start Your Project
              </a>
            </div>
          </div>
        </nav>

        <main className="relative z-10 pt-16">{children}</main>

        {import.meta.env.DEV && (
          <TanStackRouterDevtools position="bottom-right" />
        )}
        <Scripts />
      </body>
    </html>
  );
}
