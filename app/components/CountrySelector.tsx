interface Country {
  key: string;
  name: string;
  flag: string;
}

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: string;
  onCountryChange: (countryKey: string) => void;
}

export default function CountrySelector({
  countries,
  selectedCountry,
  onCountryChange,
}: CountrySelectorProps) {
  return (
    <select
      value={selectedCountry}
      onChange={(e) => onCountryChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
    >
      <option value="">Todos los países</option>
      {countries.map((country) => (
        <option key={country.key} value={country.key}>
          {country.flag} {country.name}
        </option>
      ))}
    </select>
  );
}
