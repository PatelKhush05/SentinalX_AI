function AIHealthScore() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-lg p-8 text-white">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            AI Operations Center
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            AI-powered infrastructure intelligence for Cloud SentinalX AI.
          </p>

        </div>

        <div className="text-center">

          <div className="w-36 h-36 rounded-full border-8 border-green-400 flex items-center justify-center bg-white/10">

            <div>

              <h2 className="text-4xl font-bold">
                94
              </h2>

              <p className="text-sm">
                /100
              </p>

            </div>

          </div>

          <p className="mt-4 font-semibold text-green-300">
            System Healthy
          </p>

        </div>

      </div>

    </div>
  );
}

export default AIHealthScore;