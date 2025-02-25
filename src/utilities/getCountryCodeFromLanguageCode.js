const languageCodesToCountryCodes = {
  // European countries
  EN: 'US', // English - United States
  FR: 'FR', // French - France
  ES: 'ES', // Spanish - Spain
  SV: 'SE', // Swedish - Sweden

  // Nordic countries
  DA: 'DK', // Danish - Denmark
  FI: 'FI', // Finnish - Finland
  IS: 'IS', // Icelandic - Iceland
  NO: 'NO', // Norwegian - Norway

  // Asian countries
  BN: 'BD', // Bengali - Bangladesh
  JA: 'JP', // Japanese - Japan
  ZH: 'CN', // Chinese - China
  KO: 'KR', // Korean - South Korea
  HI: 'IN', // Hindi - India
  TH: 'TH', // Thai - Thailand
};

const getCountryCodeFromLanguageCode = (languageCode) => {
  return languageCodesToCountryCodes[languageCode];
};

export default getCountryCodeFromLanguageCode;
