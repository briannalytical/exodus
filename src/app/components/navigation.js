import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left - About */}
                    <div className="flex items-center">
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                            About
                        </Link>
                    </div>

                    {/* Center - Logo/Brand */}
                    <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        Exodus
                    </Link>

                    {/* Right - Log In */}
                    <div className="flex items-center">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}