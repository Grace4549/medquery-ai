import { ArrowRight, Bot, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:px-12">
        {/* Left Side */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Bot size={18} />
            AI Powered Healthcare Assistant
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Smarter Healthcare
            <span className="block text-blue-600">
              Powered by Artificial Intelligence
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            MedQuery AI helps patients, doctors and healthcare facilities
            instantly access trusted medical knowledge, hospital resources and
            healthcare guidance through secure AI conversations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-slate-600">AI Assistance</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-slate-600">Secure Platform</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">Instant</h3>
              <p className="text-slate-600">Medical Search</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center">
          <div className="flex h-[450px] w-[450px] items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-2xl">
            <div className="rounded-full bg-white p-12 shadow-xl">
              <Stethoscope
                size={180}
                className="text-blue-600"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;