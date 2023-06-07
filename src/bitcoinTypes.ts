export enum Currencies {
  ARS = "ARS",
  AUD = "AUD",
  BRL = "BRL",
  CAD = "CAD",
  CHF = "CHF",
  CLP = "CLP",
  CNY = "CNY",
  CZK = "CZK",
  DKK = "DKK",
  EUR = "EUR",
  GBP = "GBP",
  HKD = "HKD",
  HRK = "HRK",
  HUF = "HUF",
  INR = "INR",
  ISK = "ISK",
  JPY = "JPY",
  KRW = "KRW",
  NZD = "NZD",
  PLN = "PLN",
  RON = "RON",
  RUB = "RUB",
  SEK = "SEK",
  TRY = "TRY",
  USD = "USD",
}

export type BitcoinData = {
  [key in Currencies]: {
    "15m": number;
    buy: number;
    last: string;
    sell: number;
    symbol: string;
  };
};
