'use client';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { getCountryColor, visaRequirements } from '../data/visaRequirements';

export default function VisaMap() {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        // Fetch world countries GeoJSON
        fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
            .then(response => response.json())
            .then(data => setGeoData(data))
            .catch(error => console.error('Error loading GeoJSON:', error));
    }, []);

    const countryStyle = (feature) => {
        const countryName = feature.properties.ADMIN;
        const color = getCountryColor(countryName);

        return {
            fillColor: color,
            fillOpacity: 0.7,
            color: '#ffffff',
            weight: 1
        };
    };

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        const visa = visaRequirements[countryName];

        if (visa) {
            const popupContent = `
        <div style="font-family: sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px;">${countryName}</h3>
          <p style="margin: 4px 0;"><strong>Type:</strong> ${visa.type.replace('-', ' ')}</p>
          ${visa.days ? `<p style="margin: 4px 0;"><strong>Duration:</strong> ${visa.days} days</p>` : ''}
          <p style="margin: 4px 0;"><strong>Notes:</strong> ${visa.notes}</p>
        </div>
      `;

            layer.bindPopup(popupContent);

            layer.on({
                mouseover: (e) => {
                    e.target.setStyle({
                        fillOpacity: 0.9,
                        weight: 2
                    });
                },
                mouseout: (e) => {
                    e.target.setStyle({
                        fillOpacity: 0.7,
                        weight: 1
                    });
                }
            });
        }
    };

    return (
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: '100%', width: '100%' }}
                minZoom={2}
                maxBounds={[[-90, -180], [90, 180]]}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {geoData && (
                    <GeoJSON
                        data={geoData}
                        style={countryStyle}
                        onEachFeature={onEachCountry}
                    />
                )}
            </MapContainer>

            {/* Legend */}
            <div className="mt-4 flex gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#4D9B9B' }}></div>
                    <span>Visa-free / Passport only</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F59E0B' }}></div>
                    <span>Visa required</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#6B7280' }}></div>
                    <span>Travel prohibited</span>
                </div>
            </div>
        </div>
    );
}