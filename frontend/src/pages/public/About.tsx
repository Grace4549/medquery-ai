import {
  Award,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: HeartPulse,
      title: "Patient First",
      description:
        "Everything we build is designed to improve patient access to reliable healthcare information.",
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Security, privacy and medical accuracy are at the core of our platform.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We empower healthcare professionals and hospitals to work smarter together.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "Using Artificial Intelligence responsibly to improve healthcare experiences.",
    },
  ];

  return (
    <>
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-center text-5xl font-bold text-slate-900">
            About MedQuery AI
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-slate-600">
            MedQuery AI is an AI-powered healthcare platform designed to help
            patients, healthcare professionals and hospitals access trusted
            medical information quickly, securely and intelligently.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To simplify healthcare information access through intelligent,
              secure and reliable AI technology that empowers both patients and
              healthcare providers.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              Our Vision
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To become Africa's leading healthcare knowledge platform,
              connecting hospitals and communities with trusted information.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Our Core Values
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <Icon className="mb-6 h-10 w-10 text-blue-600" />

                  <h3 className="text-2xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}

export default About;