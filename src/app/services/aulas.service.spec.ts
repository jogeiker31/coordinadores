/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AulasService } from './aulas.service';

describe('Service: Aulas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AulasService]
    });
  });

  it('should ...', inject([AulasService], (service: AulasService) => {
    expect(service).toBeTruthy();
  }));
});
