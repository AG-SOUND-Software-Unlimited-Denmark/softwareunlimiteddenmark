import { createFileRoute } from "@tanstack/react-router";

type JobCard = {
  title: string;
  type: string;
  location: string;
  href: string;
  status: string;
  description: string;
};

const JOBS: JobCard[] = [
  {
    title: "Growth & Business Development Intern",
    type: "Internship",
    location: "Remote",
    href: "/internship",
    status: "Open",
    description:
      "Support outreach, partnerships, and growth initiatives while working directly with the founder.",
  },

];

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Careers</h1>
          <p className="text-white/65 max-w-2xl">
            Join AG-SOUND Denmark and help us build digital products and AI
            solutions. Open roles are listed below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {JOBS.map((job) => (
            <a
              key={job.title}
              href={job.href}
              className="glass rounded-2xl p-7 hover:border-white/15 transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-white/50">
                  {job.type}
                </span>
                <span className="text-xs text-white/60">{job.status}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                {job.title}
              </h2>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {job.description}
              </p>
              <p className="text-sm text-white/50">{job.location}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
