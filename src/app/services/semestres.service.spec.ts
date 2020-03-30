/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SemestresService } from './semestres.service';

describe('Service: Semestres', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemestresService]
    });
  });

  it('should ...', inject([SemestresService], (service: SemestresService) => {
    expect(service).toBeTruthy();
  }));
});
