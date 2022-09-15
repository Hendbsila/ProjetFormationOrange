import { TestBed } from '@angular/core/testing';

import { ThemeSerrviceService } from './theme-serrvice.service';

describe('ThemeSerrviceService', () => {
  let service: ThemeSerrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSerrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
