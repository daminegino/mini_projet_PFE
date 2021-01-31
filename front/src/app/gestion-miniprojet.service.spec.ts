import { TestBed } from '@angular/core/testing';

import { GestionMiniprojetService } from './gestion-miniprojet.service';

describe('GestionMiniprojetService', () => {
  let service: GestionMiniprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMiniprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
