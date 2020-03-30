/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeccionesService } from './secciones.service';

describe('Service: Secciones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeccionesService]
    });
  });

  it('should ...', inject([SeccionesService], (service: SeccionesService) => {
    expect(service).toBeTruthy();
  }));
});
