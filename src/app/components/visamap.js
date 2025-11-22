'use client';

import { useState } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function VisaMap() {
    const [viewState, setViewState] = useState({
        longitude: 0,
        latitude: 20,
        zoom: 1.5
    });

    return (
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/light-v11"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            >
                {/* We'll add country layers here */}
            </Map>
        </div>
    );
}