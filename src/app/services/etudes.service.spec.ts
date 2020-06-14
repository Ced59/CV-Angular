import { TestBed } from '@angular/core/testing';

import { EtudesService } from './etudes.service';

describe('EtudesService', () => {
  let service: EtudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
