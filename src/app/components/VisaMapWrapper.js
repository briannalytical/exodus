'use client';

import dynamic from 'next/dynamic';

const VisaMap = dynamic(() => import('./VisaMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
            Loading map...
        </div>
    )
});

export default function VisaMapWrapper() {
    return <VisaMap />;
}