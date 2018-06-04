import { TestBed, inject } from '@angular/core/testing';

import { ImgUtilService } from './img.util.service';

describe('Img.UtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgUtilService]
    });
  });

  it('should be created', inject([ImgUtilService], (service: ImgUtilService) => {
    expect(service).toBeTruthy();
  }));
});
