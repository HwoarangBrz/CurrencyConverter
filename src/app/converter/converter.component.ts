import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency, Converter, ConverterResponse } from './models';
import { CurrencyService, ConverterService } from './services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currencys: Currency[];
  converter: Converter;
  hasError: boolean;
  converterResponse: ConverterResponse;

  @ViewChild("converterForm", { static: true }) converterForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService) {}

  ngOnInit(): void {
    this.currencys = this.currencyService.listAll();
  	this.init();
  }

  init(): void {
  	this.converter = new Converter('USD', 'BRL', null);
  	this.hasError = false;
  }

  convert(): void {
  	if (this.converterForm.form.valid) {
  	  this.converterService
        .convert(this.converter)
        .subscribe(
          response => this.converterResponse = response,
          error => this.hasError = true
        );
  	}
  }
}
