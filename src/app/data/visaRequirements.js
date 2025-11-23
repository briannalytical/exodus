// Visa requirements for US passport holders

export const visaRequirements = {
    // Visa-free / Passport only (90+ days typically)
    'France': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'Germany': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'Spain': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'Italy': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'United Kingdom': { type: 'visa-free', days: 180, notes: 'Tourist visa on arrival' },
    'Japan': { type: 'visa-free', days: 90, notes: 'Tourist visa on arrival' },
    'South Korea': { type: 'visa-free', days: 90, notes: 'Tourist visa on arrival' },
    'Mexico': { type: 'visa-free', days: 180, notes: 'Tourist card required' },
    'Canada': { type: 'visa-free', days: 180, notes: 'eTA required for air travel' },
    'Australia': { type: 'visa-free', days: 90, notes: 'ETA required' },
    'New Zealand': { type: 'visa-free', days: 90, notes: 'NZeTA required' },
    'Brazil': { type: 'visa-free', days: 90, notes: 'Tourist visa on arrival' },
    'Argentina': { type: 'visa-free', days: 90, notes: 'Tourist visa on arrival' },
    'Chile': { type: 'visa-free', days: 90, notes: 'Tourist visa on arrival' },
    'Singapore': { type: 'visa-free', days: 90, notes: 'Visa waiver' },
    'Thailand': { type: 'visa-free', days: 30, notes: 'Visa exemption' },
    'Iceland': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'Norway': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'Sweden': { type: 'visa-free', days: 90, notes: 'Schengen area' },
    'Denmark': { type: 'visa-free', days: 90, notes: 'Schengen area' },

    // Visa required
    'China': { type: 'visa-required', days: null, notes: 'Visa required in advance' },
    'Russia': { type: 'visa-required', days: null, notes: 'Visa required in advance' },
    'India': { type: 'visa-required', days: null, notes: 'e-Visa available' },
    'Vietnam': { type: 'visa-required', days: null, notes: 'e-Visa available' },
    'Cuba': { type: 'visa-required', days: null, notes: 'Tourist card required' },
    'Egypt': { type: 'visa-required', days: null, notes: 'Visa on arrival available' },
    'Turkey': { type: 'visa-required', days: null, notes: 'e-Visa required' },

    // Travel prohibited / heavily restricted
    'North Korea': { type: 'prohibited', days: null, notes: 'Travel ban in effect' },
    'Syria': { type: 'prohibited', days: null, notes: 'Do not travel advisory' },
    'Yemen': { type: 'prohibited', days: null, notes: 'Do not travel advisory' },
    'Libya': { type: 'prohibited', days: null, notes: 'Do not travel advisory' },
};

export const getCountryColor = (countryName) => {
    const visa = visaRequirements[countryName];

    if (!visa) return '#E5E7EB'; // Default gray for unknown

    switch (visa.type) {
        case 'visa-free':
            return '#4D9B9B'; // Blue-green
        case 'visa-required':
            return '#F59E0B'; // Orange/yellow
        case 'prohibited':
            return '#6B7280'; // Gray
        default:
            return '#E5E7EB';
    }
};