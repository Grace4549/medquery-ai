import {
  Bot,
  BookOpen,
  Hospital,
  MessageCircle,
  FileText,
  LifeBuoy,
} from "lucide-react";

function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Medical Assistant",
      description:
        "Ask healthcare questions and receive AI-powered responses based on trusted hospital resources.",
    },
    {
      icon: Hospital,
      title: "Hospital Information",
      description:
        "Browse departments, clinics, operating hours, specialists and hospital services.",
    },
    {
      icon: BookOpen,
      title: "Medical Resources",
      description:
        "Search patient education materials, hospital policies and healthcare documents instantly.",
    },
    {
      icon: MessageCircle,
      title: "Healthcare Chatbot",
      description:
        "Receive immediate assistance for common hospital enquiries before contacting staff.",
    },
    {
      icon: FileText,
      title: "FAQs & Guides",
      description:
        "Find answers to common patient questions, admission procedures and healthcare guidelines.",
    },
    {
      icon: LifeBuoy,
      title: "Support Centre",
      description:
        "Get technical assistance, account support and platform guidance whenever you need it.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Platform Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You Need in One Healthcare Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            MedQuery AI brings together artificial intelligence,
            hospital information, medical resources and patient
            support into one secure platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 font-semibold text-blue-600 transition hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;