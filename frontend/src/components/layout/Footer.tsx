function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>

            <h2 className="text-2xl font-bold text-white">
              MedQuery AI
            </h2>

            <p className="mt-4 leading-7">
              AI-powered healthcare platform helping
              hospitals, patients and professionals
              access trusted medical information.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-white">
              Platform
            </h3>

            <ul className="mt-4 space-y-3">

              <li>Home</li>

              <li>Services</li>

              <li>Resources</li>

              <li>FAQs</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3">

              <li>About</li>

              <li>Contact</li>

              <li>Privacy Policy</li>

              <li>Terms</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <ul className="mt-4 space-y-3">

              <li>Nairobi, Kenya</li>

              <li>support@medquery.ai</li>

              <li>+254 700 000 000</li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">

          © 2026 MedQuery AI. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;