import { Search, MessageSquareText, BrainCircuit, CheckCircle2 } from "lucide-react";

function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description:
        "Ask a healthcare question or search hospital resources using natural language.",
    },
    {
      icon: BrainCircuit,
      title: "AI Understands",
      description:
        "MedQuery AI analyzes your request using trusted medical knowledge and hospital documents.",
    },
    {
      icon: MessageSquareText,
      title: "Receive Answers",
      description:
        "Get accurate, easy-to-understand responses within seconds.",
    },
    {
      icon: CheckCircle2,
      title: "Take Action",
      description:
        "Find departments, services, documents or the next healthcare step confidently.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            How MedQuery AI Works
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Get reliable healthcare information in four simple steps.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon size={30} />
                </div>

                <div className="mt-6 text-sm font-bold text-blue-600">
                  STEP {index + 1}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;