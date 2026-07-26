import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="text-3xl font-bold">
        Welcome Back
      </h2>

      <p className="mt-2 text-slate-600">
        Sign in to your account.
      </p>

      <form className="mt-8 space-y-6">

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border p-4"
        />

        <Button className="w-full" size="lg">
          Login
        </Button>

      </form>

      <div className="mt-6 text-center text-sm">

        <Link
          to="/forgot-password"
          className="text-blue-600"
        >
          Forgot Password?
        </Link>

      </div>

      <div className="mt-6 text-center">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-blue-600"
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default Login;