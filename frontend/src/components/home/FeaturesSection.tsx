import {
  Lock,
  Clock3,
  Sparkles,
  FileSearch,
  ShieldCheck,
  Globe,
} from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Powered",
    },
    {
      icon: Lock,
      title: "Secure & Private",
    },
    {
      icon: Clock3,
      title: "24/7 Availability",
    },
    {
      icon: FileSearch,
      title: "Smart Search",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Information",
    },
    {
      icon: Globe,
      title: "Accessible Anywhere",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Built for Modern Healthcare
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="mb-6 h-10 w-10 text-blue-600" />

                <h3 className="text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Designed with reliability, security and user experience at the
                  center of every interaction.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;