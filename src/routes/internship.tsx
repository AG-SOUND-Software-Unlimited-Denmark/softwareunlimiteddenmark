import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/internship")({
  component: InternshipPage,
});

function InternshipPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] px-6 py-20">
      <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Marketing &amp; Growth Strategy Intern (Unpaid, Remote)
        </h1>
        <p className="text-white/60 mb-8">AG-SOUND Denmark</p>

        <p className="text-white/80 leading-relaxed mb-8">
          We are looking for a proactive intern who wants hands-on experience
          working with growth strategy, marketing execution, and go-to-market
          development for real digital products.
        </p>

        <p className="text-white/80 leading-relaxed mb-8">
          You will work closely with the founder and contribute directly to
          building and scaling one of our core products, CaseChronicles.dk.
        </p>

        <h2 className="text-xl font-semibold mb-4">What you will work on</h2>
        <ul className="list-disc pl-6 space-y-2 text-white/80 mb-8">
          <li>Defining and executing marketing campaigns</li>
          <li>Identifying collaboration partners and growth opportunities</li>
          <li>Creating PR materials and brand communication assets</li>
          <li>Building outbound strategies and defining high-value ICPs</li>
          <li>Structuring B2B partnerships and collaboration pipelines</li>
          <li>Designing and running growth experiments</li>
          <li>Testing acquisition channels and analyzing performance</li>
          <li>Supporting go-to-market strategy across channels</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Who you are</h2>
        <ul className="list-disc pl-6 space-y-2 text-white/80 mb-8">
          <li>
            Student (Marketing, Strategy, Digital Business, International
            Business or similar)
          </li>
          <li>Strong communication skills in Danish and English</li>
          <li>Proactive and comfortable taking initiative</li>
          <li>Interested in startups, growth, and entrepreneurship</li>
          <li>Structured and able to work independently</li>
        </ul>

        <p className="text-white/80 leading-relaxed mb-8">
          Experience is not required - curiosity, ownership, and reliability
          matter more.
        </p>

        <h2 className="text-xl font-semibold mb-4">What to expect</h2>
        <ul className="list-disc pl-6 space-y-2 text-white/80 mb-8">
          <li>Weekly growth alignment and async collaboration</li>
          <li>Flexible working hours with real ownership</li>
          <li>Freedom to experiment, take risks, and learn fast</li>
          <li>Direct involvement in a real product (CaseChronicles.dk)</li>
          <li>Insight into how early-stage companies build and scale</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Practical details</h2>
        <div className="text-white/70 space-y-1">
          <p>
            <span className="font-medium text-white/90">Location:</span> Remote
          </p>
          <p>
            <span className="font-medium text-white/90">Duration:</span> 3-6
            months (flexible)
          </p>
          <p>
            <span className="font-medium text-white/90">Compensation:</span>{" "}
            Unpaid internship
          </p>
        </div>

        <p className="text-white/80 leading-relaxed mt-8">
          To apply, send your CV and a short note on why you would be a good
          fit by email to{" "}
          <a
            href="mailto:internship@ag-sound.com"
            className="text-white underline hover:text-white/80 transition-colors"
          >
            internship@ag-sound.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
