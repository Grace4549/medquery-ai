import {
  ChevronRight,
  CircleHelp,
} from "lucide-react";

function FAQPreviewSection() {
  const faqs = [
    "Is MedQuery AI a replacement for doctors?",
    "Can I search hospital policies and documents?",
    "Is my health information secure?",
    "Can hospitals customize MedQuery AI?",
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="text-center max-w-3xl mx-auto">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Common Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before getting started.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq) => (

            <div
              key={faq}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-300 hover:shadow-md cursor-pointer"
            >

              <div className="flex items-center gap-4">

                <CircleHelp className="text-blue-600" />

                <h3 className="text-lg font-medium text-slate-900">
                  {faq}
                </h3>

              </div>

              <ChevronRight className="text-slate-400" />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQPreviewSection;