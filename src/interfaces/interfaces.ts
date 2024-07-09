export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
}

export interface IGetPageNumbers {
  MAX_PAGE_NUMBERS: number
  totalPages: number,
  currentPage: number
}

export interface ISelectRegion {
  selectedRegion: string,
  regions: string[],
  handleRegionChange(region: string): void
}