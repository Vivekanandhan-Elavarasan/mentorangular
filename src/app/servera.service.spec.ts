import { TestBed } from '@angular/core/testing';

import { ServeraService } from './servera.service';

describe('ServeraService', () => {
  let service: ServeraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
