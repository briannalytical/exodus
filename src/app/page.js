export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Exodus
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        You can leave. For how long is up to you.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                        Choose Your Path
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Path cards will go here next */}
                    </div>
                </div>
            </div>
        </main>
    );
}