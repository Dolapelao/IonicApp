import { TestBed } from '@angular/core/testing';

import { ConsultamedicaservicioService } from './consultamedicaservicio.service';

describe('ConsultamedicaservicioService', () => {
  let service: ConsultamedicaservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultamedicaservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
