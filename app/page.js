import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PickLog</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Log every lockpick attempt, tag lock models, and see how you rank against the community.
          </p>
          <div className="space-x-4 justify-center">
            <Link href="/logs" className="inline-block px-6 py-3 bg-white text-indigo-800 font-semibold rounded-lg hover:bg-gray-100 transition">
              Start Logging
            </Link>
            <Link href="/leaderboard" className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/20 transition">
              View Leaderboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features Built for Locksport</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  📝
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Detailed Attempt Logging</h3>
                  <p className="text-gray-600">
                    Record time, tools used, notes, and difficulty rating for each lock you pick.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  🏷️
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tag Lock Models</h3>
                  <p className="text-gray-600">
                    Tag each attempt with lock brand, model, and security level to build a searchable database.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  🏆
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Leaderboards</h3>
                  <p className="text-gray-600">
                    Compare your stats, see top pickers, and challenge friends in friendly competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to level up your lockpicking?</h2>
          <p className="text-gray-600 mb-8">
            Join hundreds of enthusiasts who are already logging their progress.
          </p>
          <Link href="/logs" className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Create Your First Log
          </Link>
        </div>
      </section>
    </div>
  );
}