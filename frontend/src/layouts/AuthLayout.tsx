import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left */}

        <div className="hidden w-1/2 bg-blue-700 p-16 text-white lg:flex lg:flex-col lg:justify-center">

          <h1 className="text-5xl font-bold">
            MedQuery AI
          </h1>

          <p className="mt-8 text-xl leading-9">
            Secure AI-powered healthcare platform connecting patients,
            healthcare professionals and hospitals through trusted medical
            knowledge.
          </p>

          <div className="mt-16 space-y-8">

            <div>
              ✓ AI Medical Assistant
            </div>

            <div>
              ✓ Secure Hospital Knowledge Base
            </div>

            <div>
              ✓ 24/7 Healthcare Support
            </div>

            <div>
              ✓ Patient & Clinical Resources
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 items-center justify-center p-10">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;