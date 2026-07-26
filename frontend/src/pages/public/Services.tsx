import {
  Bot,
  FileSearch,
  Hospital,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Medical Assistant",
      description:
        "Receive AI-powered answers to healthcare questions using trusted medical resources.",
    },
    {
      icon: Hospital,
      title: "Hospital Directory",
      description:
        "Browse departments, specialists, clinics and healthcare facilities with ease.",
    },
    {
      icon: FileSearch,
      title: "Document Search",
      description:
        "Quickly locate policies, procedures and patient education materials.",
    },
    {
      icon: MessageSquare,
      title: "Healthcare Chat",
      description:
        "Interact naturally with MedQuery AI to find healthcare information in seconds.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Knowledge Base",
      description:
        "Access reliable information protected by enterprise-grade security.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Support",
      description:
        "Designed to assist healthcare professionals with knowledge retrieval.",
    },
  ];

  return (
    <>
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Our Services
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            MedQuery AI combines artificial intelligence, healthcare knowledge
            and hospital resources into one intelligent platform.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;