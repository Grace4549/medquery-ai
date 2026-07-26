import {
  BookOpen,
  Download,
  FileText,
  Search,
} from "lucide-react";

function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "Hospital Policies",
      description:
        "Browse healthcare policies and institutional guidelines.",
    },
    {
      icon: BookOpen,
      title: "Patient Education",
      description:
        "Educational materials designed to improve patient understanding.",
    },
    {
      icon: Download,
      title: "Downloads",
      description:
        "Forms, documents and printable healthcare resources.",
    },
  ];

  return (
    <>
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Healthcare Resources
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            Search trusted healthcare information, hospital documents
            and educational materials.
          </p>

          <div className="mx-auto mt-12 flex max-w-2xl items-center rounded-2xl border border-slate-300 bg-white px-6 py-4 shadow-sm">
            <Search className="text-slate-500" />

            <input
              type="text"
              placeholder="Search healthcare resources..."
              className="ml-4 w-full bg-transparent outline-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <Icon className="mb-6 h-10 w-10 text-blue-600" />

                <h3 className="text-2xl font-semibold">
                  {resource.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {resource.description}
                </p>

                <button className="mt-8 font-semibold text-blue-600">
                  Browse →
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Resources;