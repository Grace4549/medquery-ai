import { ChevronDown } from "lucide-react";

function FAQs() {
  const faqs = [
    {
      question: "Is MedQuery AI a replacement for a doctor?",
      answer:
        "No. MedQuery AI provides healthcare information and guidance but does not replace professional medical advice, diagnosis or treatment.",
    },
    {
      question: "Can hospitals upload their own documents?",
      answer:
        "Yes. Hospitals can securely upload policies, procedures, FAQs and other internal knowledge for AI-powered search.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Absolutely. Security and patient privacy are fundamental principles of the platform.",
    },
    {
      question: "Who can use MedQuery AI?",
      answer:
        "Patients, healthcare professionals, administrators and hospitals can all benefit from the platform.",
    },
    {
      question: "Does MedQuery AI work 24/7?",
      answer:
        "Yes. The AI assistant is available around the clock to answer healthcare-related questions.",
    },
  ];

  return (
    <>
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            Everything you need to know about MedQuery AI.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                {faq.question}
                <ChevronDown />
              </summary>

              <p className="mt-5 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

export default FAQs;