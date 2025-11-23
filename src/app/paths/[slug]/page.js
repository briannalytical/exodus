import VisaMap from '../../components/VisaMap';

export default async function PathPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    console.log('Slug value:', slug);

    const pathTitles = {
        'sabbatical': 'Sabbatical',
        'work-travel': 'Work & Travel',
        'employment': 'Employment',
        'digital-nomad': 'Digital Nomad',
        'dual-citizenship': 'Dual Citizenship',
        'renunciation': 'Renunciation'
    };

    const title = pathTitles[slug] || 'Path';

    console.log('Title:', title);
    console.log('Should show map?', slug === 'sabbatical');

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your personalized pathway for {title.toLowerCase()}.
                    </p>

                    {slug === 'sabbatical' && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Visa Requirements by Country</h2>
                            <VisaMap />
                        </div>
                    )}

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                        <p className="text-gray-600">
                            We're building out the assessment, pathway, and checklist features for this path.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}