import { Injectable } from '@angular/core';

import { Currency } from '../models';

@Injectable()
export class CurrencyService {

  private currencys: Currency[];

  constructor() { }

  private currencysObj = [
    { "symbol": "AUD", "description": "Dólar australiano" },
    { "symbol": "BGN", "description": "Lev búlgaro" },
    { "symbol": "BRL", "description": "Real brasileiro" },
    { "symbol": "CAD", "description": "Dólar canadense" },
    { "symbol": "CHF", "description": "Franco suíço" },
    { "symbol": "CNY", "description": "Yuan Chinês" },
    { "symbol": "CZK", "description": "Coroa República Tcheca" },
    { "symbol": "DKK", "description": "Coroa dinamarquesa" },
    { "symbol": "EUR", "description": "Euro" },
    { "symbol": "GBP", "description": "Libra Esterlina" },
    { "symbol": "HKD", "description": "Dólar de Hong Kong" },
    { "symbol": "HRK", "description": "Coroa Croácia" },
    { "symbol": "HUF", "description": "Florim húngaro" },
    { "symbol": "IDR", "description": "Rupia indonésia" },
    { "symbol": "ILS", "description": "Novo shekel israelense" },
    { "symbol": "INR", "description": "Rupia indiana" },
    { "symbol": "JPY", "description": "Iene japonês" },
    { "symbol": "KRW", "description": "Won sul-coreano" },
    { "symbol": "MXN", "description": "Peso mexicano" },
    { "symbol": "MYR", "description": "Malásia Ringgit" },
    { "symbol": "NOK", "description": "Coroa Noruega" },
    { "symbol": "NZD", "description": "Dólar da Nova Zelândia" },
    { "symbol": "PHP", "description": "Peso filipino" },
    { "symbol": "PLN", "description": "Złoty Polónia" },
    { "symbol": "RON", "description": "Leu romeno" },
    { "symbol": "RUB", "description": "Belarus Ruble" },
    { "symbol": "SEK", "description": "Coroa Suécia" },
    { "symbol": "SGD", "description": "Dólar de Singapura" },
    { "symbol": "THB", "description": "Baht Tailândia" },
    { "symbol": "TRY", "description": "Lira turca" },
    { "symbol": "USD", "description": "Dólar dos Estados Unidos" }, 
    { "symbol": "ZAR", "description": "Rand África do Sul" }
];

  listAll(): Currency[] {
    if (this.currencys) {
      return this.currencys;
    }

    this.currencys = [];

    for (let currencyObj of this.currencysObj) {
      let currency: Currency = new Currency();
      Object.assign(currency, currencyObj);
      this.currencys.push(currency);
    }

    return this.currencys;
  }
}
