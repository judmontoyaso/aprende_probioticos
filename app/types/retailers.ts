export interface Retailer {
  id: string;
  name: string;
  address: string;
  phone?: string;
  whatsapp?: string | null;
  website?: string;
  productUrl?: string | null;
  hours?: string | null;
  priceExample?: string | null;
  paymentMethods?: string[];
  reliabilityNote?: string;
  probioticTypes: string[];
  brands: string[];
  onlineStore?: boolean;
  delivery?: boolean;
  reliability?: string;
  description?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface City {
  name: string;
  province: string;
  retailers: Retailer[];
}

export interface Country {
  name: string;
  flag: string;
  cities: {
    [key: string]: City;
  };
}

export interface RetailersData {
  countries: {
    [key: string]: Country;
  };
}

export interface FilteredRetailer extends Retailer {
  countryName: string;
  countryKey: string;
  cityName: string;
  cityKey: string;
  province: string;
}
