import { TestBed } from '@angular/core/testing';

import { OrdenadorRESTService } from './ordenador-rest.service';

describe('OrdenadorRESTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenadorRESTService = TestBed.get(OrdenadorRESTService);
    expect(service).toBeTruthy();
  });
});
