import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Register() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="text-3xl font-bold">
        Create Account
      </h2>

      <p className="mt-2 text-slate-600">
        Join MedQuery AI today.
      </p>

      <form className="mt-8 space-y-5">

        <input
          placeholder="Full Name"
          className="w-full rounded-xl border p-4"
        />

        <input
          placeholder="Email"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-xl border p-4"
        />

        <Button
          className="w-full"
          size="lg"
        >
          Create Account
        </Button>

      </form>

      <div className="mt-6 text-center">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-blue-600"
        >
          Login
        </Link>

      </div>

    </div>
  );
}

export default Register;