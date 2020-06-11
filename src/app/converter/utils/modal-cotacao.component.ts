import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ConverterResponse, Converter } from '../models/';
import { ConverterService } from '../services';

@Component({
  selector: 'app-modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

	@Input() id: string;
	@Input() converterResponse: ConverterResponse;
	@Input() converter: Converter = new Converter();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

	newConsult() {
		this.onConfirm.emit();
	}

	get valueConverted(): string {
	  	if (this.converterResponse === undefined) {
	  		return '0';
	  	}
	  	return (this.converter.value * this.converterResponse.rates[this.converter.currencyTo]).toFixed(2);
	}

	get priceTo(): number {
	  	return this.converterService.priceTo(this.converterResponse, this.converter);
	}

	get priceFrom(): string {
	  	return this.converterService.priceFrom(this.converterResponse, this.converter);
	}

	get priceData(): string {
		return this.converterService.priceData(this.converterResponse);
	}
}
