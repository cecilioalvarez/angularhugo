import { TestBed } from '@angular/core/testing';

import { OrdenadorService } from './ordenador.service';

describe('OrdenadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenadorService = TestBed.get(OrdenadorService);
    expect(service).toBeTruthy();
  });
});
