import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="bg-blue-600 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Transform Healthcare?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Join healthcare professionals, hospitals and patients
          using MedQuery AI to access trusted medical knowledge
          faster than ever before.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Button
            size="lg"
            variant="secondary"
          >
            Get Started

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
          >
            Contact Us
          </Button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;