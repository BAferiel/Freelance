import { TestBed } from '@angular/core/testing';

import { ServicefarahService } from './servicefarah.service';

describe('ServicefarahService', () => {
  let service: ServicefarahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicefarahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
