import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	ConverterService
      ],
      imports: [
      	HttpClientModule
      ]
    });
  });

  it('should ...', inject([ConverterService], (service: ConverterService) => {
    expect(service).toBeTruthy();
  }));
});
