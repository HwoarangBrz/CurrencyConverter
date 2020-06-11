import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './converter.component';
import { CurrencyService, ConverterService } from './services';
import { DataBrPipe } from './pipes/data-br.pipe';
import { NumberDirective } from './directives/number.directive';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';

@NgModule({
  declarations: [
    ConverterComponent,
    DataBrPipe,
    NumberDirective,
    ModalCotacaoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
