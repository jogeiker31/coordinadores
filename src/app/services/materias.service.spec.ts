/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MateriasService } from './materias.service';

describe('Service: Materias', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriasService]
    });
  });

  it('should ...', inject([MateriasService], (service: MateriasService) => {
    expect(service).toBeTruthy();
  }));
});
