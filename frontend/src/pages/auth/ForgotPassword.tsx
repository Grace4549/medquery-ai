import { Button } from "@/components/ui/button";

function ForgotPassword() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="text-3xl font-bold">
        Forgot Password
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your email and we'll send you a password reset link.
      </p>

      <form className="mt-8 space-y-6">

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border p-4"
        />

        <Button
          className="w-full"
          size="lg"
        >
          Send Reset Link
        </Button>

      </form>

    </div>
  );
}

export default ForgotPassword;