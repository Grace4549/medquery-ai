import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <>
      <section className="bg-slate-100 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600">
            We'd love to hear from you. Reach out to our team for support,
            partnerships or general enquiries.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <h2 className="text-3xl font-bold">
              Send us a Message
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Your message..."
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500"
              />

              <Button size="lg">
                Send Message
              </Button>

            </form>

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <div className="mt-10 space-y-8">

              <div className="flex gap-4">

                <MapPin className="text-blue-600" />

                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-slate-600">
                    Nairobi, Kenya
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-blue-600" />

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-600">
                    support@medquery.ai
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="text-blue-600" />

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-600">
                    +254 700 000 000
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-12 flex h-72 items-center justify-center rounded-2xl bg-slate-200 text-slate-500">
              Google Map Placeholder
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;