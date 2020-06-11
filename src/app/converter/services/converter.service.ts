import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Converter, ConverterResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=988f378c08f459391577762a99261a63";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  convert(converter: Converter): Observable<ConverterResponse> {
    let params = `&base=${converter.currencyFrom}&symbols=${converter.currencyTo}`;
    return this.http
      .get(this.BASE_URL + params)
      .map((res: Response) => res.json() as unknown as ConverterResponse) 
      .catch(error => Observable.throw(error));
  }

  priceTo(converterResponse: ConverterResponse, converter: Converter): number {
  	if (converterResponse === undefined) {
  		return 0;
  	}
  	return converterResponse.rates[converter.currencyTo];
  }

  priceFrom(converterResponse: ConverterResponse, converter: Converter): string {
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
