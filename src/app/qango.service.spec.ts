import { TestBed } from '@angular/core/testing';

import { QangoService } from './qango.service';

describe('QangoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QangoService = TestBed.get(QangoService);
    expect(service).toBeTruthy();
  });
});
