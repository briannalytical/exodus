export default function Home() {
    const paths = [
        {
            title: "Sabbatical",
            subtitle: "Tourist Visa/Passport Only",
            description: "Short-term exploration, typically 90-180 days",
            icon: "✈️",
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Work & Travel",
            subtitle: "Working Holiday Visa",
            description: "Temporary work authorization with travel opportunities",
            icon: "🌍",
            color: "from-green-400 to-green-600"
        },
        {
            title: "Employment",
            subtitle: "Work Visa",
            description: "Sponsored work authorization in a new country",
            icon: "💼",
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "Digital Nomad",
            subtitle: "Remote Work/Blue Visa",
            description: "Live abroad while working remotely for your American-based company",
            icon: "💻",
            color: "from-orange-400 to-orange-600"
        },
        {
            title: "Dual Citizenship",
            subtitle: "Permanent Status",
            description: "Obtain citizenship in another country",
            icon: "🏛️",
            color: "from-red-400 to-red-600"
        },
        {
            title: "Renunciation",
            subtitle: "Give Up US Citizenship",
            description: "Formally renounce your American citizenship",
            icon: "📋",
            color: "from-gray-400 to-gray-600"
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Exodus
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        You <i>can</i> leave. For how long is up to you.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                        Choose Your Path
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paths.map((path, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                            >
                                <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
                                <div className="p-6">
                                    <div className="text-4xl mb-4">{path.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {path.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-3">{path.subtitle}</p>
                                    <p className="text-gray-600">{path.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}