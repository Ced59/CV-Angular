import { TestBed } from '@angular/core/testing';

import { ParcoursProService } from './parcours-pro.service';

describe('ParcoursProService', () => {
  let service: ParcoursProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcoursProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
