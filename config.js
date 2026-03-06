// API Configuration
const API_CONFIG = {
    // Production backend URL (Railway)
    // BASE_URL: "https://infostream-backend-production.up.railway.app",
    
    // Local development (comment out for production)
    BASE_URL: "http://localhost:8000"

    // Add this map at the top of your script
};

const TIMEZONE_MAP = {
    'AF': 'Asia/Kabul', 'AL': 'Europe/Tirane', 'DZ': 'Africa/Algiers',
    'AR': 'America/Argentina/Buenos_Aires', 'AM': 'Asia/Yerevan',
    'AU': 'Australia/Sydney', 'AT': 'Europe/Vienna', 'AZ': 'Asia/Baku',
    'BH': 'Asia/Bahrain', 'BD': 'Asia/Dhaka', 'BY': 'Europe/Minsk',
    'BE': 'Europe/Brussels', 'BO': 'America/La_Paz', 'BA': 'Europe/Sarajevo',
    'BR': 'America/Sao_Paulo', 'BG': 'Europe/Sofia', 'KH': 'Asia/Phnom_Penh',
    'CA': 'America/Toronto', 'CL': 'America/Santiago', 'CN': 'Asia/Shanghai',
    'CO': 'America/Bogota', 'HR': 'Europe/Zagreb', 'CZ': 'Europe/Prague',
    'DK': 'Europe/Copenhagen', 'EG': 'Africa/Cairo', 'EE': 'Europe/Tallinn',
    'ET': 'Africa/Addis_Ababa', 'FI': 'Europe/Helsinki', 'FR': 'Europe/Paris',
    'GE': 'Asia/Tbilisi', 'DE': 'Europe/Berlin', 'GH': 'Africa/Accra',
    'GR': 'Europe/Athens', 'GT': 'America/Guatemala', 'HN': 'America/Tegucigalpa',
    'HK': 'Asia/Hong_Kong', 'HU': 'Europe/Budapest', 'IS': 'Atlantic/Reykjavik',
    'IN': 'Asia/Kolkata', 'ID': 'Asia/Jakarta', 'IR': 'Asia/Tehran',
    'IQ': 'Asia/Baghdad', 'IE': 'Europe/Dublin', 'IL': 'Asia/Jerusalem',
    'IT': 'Europe/Rome', 'JP': 'Asia/Tokyo', 'JO': 'Asia/Amman',
    'KZ': 'Asia/Almaty', 'KE': 'Africa/Nairobi', 'KW': 'Asia/Kuwait',
    'KG': 'Asia/Bishkek', 'LV': 'Europe/Riga', 'LB': 'Asia/Beirut',
    'LT': 'Europe/Vilnius', 'LU': 'Europe/Luxembourg', 'MY': 'Asia/Kuala_Lumpur',
    'MV': 'Indian/Maldives', 'MX': 'America/Mexico_City', 'MD': 'Europe/Chisinau',
    'MN': 'Asia/Ulaanbaatar', 'MA': 'Africa/Casablanca', 'MM': 'Asia/Rangoon',
    'NP': 'Asia/Kathmandu', 'NL': 'Europe/Amsterdam', 'NZ': 'Pacific/Auckland',
    'NG': 'Africa/Lagos', 'NO': 'Europe/Oslo', 'OM': 'Asia/Muscat',
    'PK': 'Asia/Karachi', 'PA': 'America/Panama', 'PY': 'America/Asuncion',
    'PE': 'America/Lima', 'PH': 'Asia/Manila', 'PL': 'Europe/Warsaw',
    'PT': 'Europe/Lisbon', 'QA': 'Asia/Qatar', 'RO': 'Europe/Bucharest',
    'RU': 'Europe/Moscow', 'SA': 'Asia/Riyadh', 'RS': 'Europe/Belgrade',
    'SG': 'Asia/Singapore', 'SK': 'Europe/Bratislava', 'SI': 'Europe/Ljubljana',
    'ZA': 'Africa/Johannesburg', 'KR': 'Asia/Seoul', 'ES': 'Europe/Madrid',
    'LK': 'Asia/Colombo', 'SE': 'Europe/Stockholm', 'CH': 'Europe/Zurich',
    'SY': 'Asia/Damascus', 'TW': 'Asia/Taipei', 'TJ': 'Asia/Dushanbe',
    'TH': 'Asia/Bangkok', 'TN': 'Africa/Tunis', 'TR': 'Europe/Istanbul',
    'TM': 'Asia/Ashgabat', 'UA': 'Europe/Kiev', 'AE': 'Asia/Dubai',
    'GB': 'Europe/London', 'US': 'America/New_York', 'UY': 'America/Montevideo',
    'UZ': 'Asia/Tashkent', 'VE': 'America/Caracas', 'VN': 'Asia/Ho_Chi_Minh',
    'YE': 'Asia/Aden', 'ZW': 'Africa/Harare'
}

// Export for use in other files
const API_BASE_URL = API_CONFIG.BASE_URL;