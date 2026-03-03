export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          UI Agent
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Earn passive income with your referral links
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">🔗 Easy Links</h2>
            <p className="text-gray-600">Create and manage referral links with just a few clicks</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">📊 Analytics</h2>
            <p className="text-gray-600">Track clicks, referrals, and earnings in real-time</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">💰 Payouts</h2>
            <p className="text-gray-600">Get paid automatically when you reach the minimum amount</p>
          </div>
        </div>
        <div className="mt-12">
          <a href="/dashboard" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}