import {
  ShieldCheck,
  Hospital,
  UserRound,
  Brain,
} from "lucide-react";

function TrustedSection() {
  const items = [
    {
      icon: Hospital,
      title: "Hospitals",
      description:
        "Access hospital information, departments, visiting hours and patient services.",
    },
    {
      icon: UserRound,
      title: "Patients",
      description:
        "Receive reliable healthcare guidance and navigate medical resources with ease.",
    },
    {
      icon: Brain,
      title: "AI Knowledge",
      description:
        "Search trusted hospital documents and healthcare information instantly.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Private",
      description:
        "Built with security and patient privacy as a priority.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted Healthcare Platform
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Designed for Everyone in Healthcare
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Whether you're a patient looking for hospital information,
            a healthcare professional searching internal resources,
            or a hospital administrator managing knowledge,
            MedQuery AI makes information easy to find.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;