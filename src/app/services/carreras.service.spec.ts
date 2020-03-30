/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarrerasService } from './carreras.service';

describe('Service: Carreras', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrerasService]
    });
  });

  it('should ...', inject([CarrerasService], (service: CarrerasService) => {
    expect(service).toBeTruthy();
  }));
});
