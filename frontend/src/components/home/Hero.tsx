import doctorIllustration from "@/assets/images/Online Doctor-rafiki.svg";

import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:px-12">

        {/* LEFT */}

        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Bot size={18} />
            AI Powered Healthcare Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Smarter Healthcare
            <span className="block text-blue-600">
              Powered by Artificial Intelligence
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            MedQuery AI helps hospitals, healthcare professionals and patients
            securely access trusted medical knowledge, hospital resources and
            healthcare guidance through intelligent AI conversations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
  size="lg"
  className="rounded-xl bg-blue-600 px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
>
  Try MedQuery AI
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8"
            >
              Explore Platform
            </Button>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">

            <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur">

              <Activity className="mb-3 text-blue-600" />

              <h3 className="text-3xl font-bold text-slate-900">
                24/7
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                AI Assistance
              </p>

            </div>

            <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur">

              <ShieldCheck className="mb-3 text-green-600" />

              <h3 className="text-3xl font-bold text-slate-900">
                Secure
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Privacy First
              </p>

            </div>

            <div className="rounded-2xl border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur">

              <Bot className="mb-3 text-cyan-600" />

              <h3 className="text-3xl font-bold text-slate-900">
                Instant
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Smart Search
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

        <img
  src={doctorIllustration}
  alt="AI Healthcare Illustration"
  className="w-full max-w-2xl scale-110 drop-shadow-2xl transition-all duration-500 lg:scale-125"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;