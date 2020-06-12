import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Converter, ConverterResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=988f378c08f459391577762a99261a63';

  constructor(private http: HttpClient) {}

  convert(converter: Converter): Observable<any> {
    let params = `&base=${converter.currencyFrom}&symbols=${converter.currencyTo}`;
    return this.http.get(this.BASE_URL + params);
  }

  priceTo(converterResponse: ConverterResponse, converter: Converter): number {
    if (converterResponse === undefined) {
      return 0;
    }
    return converterResponse.rates[converter.currencyTo];
  }

  priceFrom(
    converterResponse: ConverterResponse,
    converter: Converter
  ): string {
    if (converterResponse === undefined) {
      return '0';
    }
    return (1 / converterResponse.rates[converter.currencyTo]).toFixed(4);
  }

  priceData(converterResponse: ConverterResponse): string {
    if (converterResponse === undefined) {
      return '';
    }
    return converterResponse.date;
  }
}
