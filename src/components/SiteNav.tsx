import { Link, useRouterState } from "@tanstack/react-router";
import * as React from "react";

const linkClass =
  "text-white/60 hover:text-white text-sm font-medium py-3 px-2 -mx-2 rounded transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

const mobileLinkClass =
  "block w-full text-left text-white/80 hover:text-white hover:bg-white/5 text-base font-medium px-4 py-3.5 rounded-xl transition-colors cursor-pointer min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400";

export function SiteNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link
          to="/"
          className="flex items-center gap-3 group min-w-0 shrink"
          onClick={close}
        >
          <div className="flex flex-col min-w-0">
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors leading-tight">
              AG-SOUND
            </span>
            <span className="text-xs text-white/50 hidden sm:inline">
              Software Unlimited Denmark
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="/#showcase" className={linkClass}>
            Demo 2026
          </a>
          <Link to="/about" className={linkClass}>
            About us
          </Link>
          <a
            href="/#contact"
            className="btn-primary btn-nav text-white text-sm cursor-pointer"
          >
            Start Your Project
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden inline-flex items-center justify-center size-11 -mr-1 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-16 z-40 bg-black/50 cursor-pointer"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            id="mobile-nav"
            className="md:hidden relative z-50 border-t border-white/10 px-4 pb-5 pt-3 bg-[#0a0a12]/95"
          >
            <div className="flex flex-col gap-1">
              <a href="/#showcase" className={mobileLinkClass} onClick={close}>
                Demo 2026
              </a>
              <Link to="/about" className={mobileLinkClass} onClick={close}>
                About us
              </Link>
              <a
                href="/#contact"
                className="btn-primary btn-nav text-white text-sm text-center mt-3 cursor-pointer"
                onClick={close}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
