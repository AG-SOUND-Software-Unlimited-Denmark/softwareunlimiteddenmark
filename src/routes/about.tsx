import { createFileRoute } from "@tanstack/react-router";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      ...seo({
        title: "About us | AG-SOUND",
        description:
          "Meet the team behind AG-SOUND — Software Unlimited Denmark.",
        keywords:
          "AG-SOUND, About us, Alejandro Gispert, Mab Ardal, Software Unlimited Denmark",
      }),
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <section className="flex-1 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">
            The team
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">About us</h1>
          <p className="text-white/65 max-w-2xl mb-14">
            AG-SOUND is Software Unlimited Denmark. We build digital products
            and AI solutions that turn complex challenges into tangible results.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <article className="glass rounded-2xl p-6 md:p-8 text-center">
              <img
                src="/team/alejandro.png"
                alt="Alejandro Gispert"
                className="w-full aspect-square object-cover rounded-2xl mb-6"
              />
              <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
                Founder and Developer
              </p>
              <h2 className="text-xl font-semibold">Alejandro Gispert</h2>
            </article>

            <article className="glass rounded-2xl p-6 md:p-8 text-center">
              <img
                src="/team/mab.png"
                alt="Mab Ardal"
                className="w-full aspect-square object-cover object-top rounded-2xl mb-6"
              />
              <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
                Marketing & Growth Strategy Intern
              </p>
              <h2 className="text-xl font-semibold">Mab Ardal</h2>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-white/90">AG-SOUND</span>
            <span className="text-white/50 text-sm ml-2">
              Software Unlimited Denmark
            </span>
          </div>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} AG-SOUND. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
