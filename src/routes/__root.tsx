/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
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
        type: "image/png",
        sizes: "48x48",
        href: "/favicon-48x48.png?v=3",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png?v=3",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg?v=3",
      },
      { rel: "shortcut icon", href: "/favicon.ico?v=3" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png?v=3",
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
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="/#showcase" className="text-white/60 hover:text-white text-sm font-medium py-3 px-2 -mx-2 rounded transition-colors">
                Demo 2026
              </a>
              <Link
                to="/about"
                className="text-white/60 hover:text-white text-sm font-medium py-3 px-2 -mx-2 rounded transition-colors"
              >
                About us
              </Link>
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
