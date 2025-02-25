const currencyCodesToCountryCodes = {
  USD: 'US', // United States Dollar
  EUR: 'EU', // Euro
  GBP: 'GB', // British Pound Sterling
  JPY: 'JP', // Japanese Yen
  CNY: 'CN', // Chinese Yuan
  INR: 'IN', // Indian Rupee
  BDT: 'BD', // Bangladeshi Taka
  DKK: 'DK', // Danish Krone
  SEK: 'SE', // Swedish Krona
  NOK: 'NO', // Norwegian Krone
  THB: 'TH', // Thai Baht
  // Add more currency-country code pairs as needed
};

const getCountryCodeFromCurrencyCode = (currencyCode) => {
  return currencyCodesToCountryCodes[currencyCode];
};

export default getCountryCodeFromCurrencyCode;
