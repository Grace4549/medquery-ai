function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-700">
          MedQuery AI
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          AI-powered healthcare assistant
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Home;