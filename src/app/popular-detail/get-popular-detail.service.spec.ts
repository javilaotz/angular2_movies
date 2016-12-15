/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPopularDetailService } from './get-popular-detail.service';

describe('GetPopularDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPopularDetailService]
    });
  });

  it('should ...', inject([GetPopularDetailService], (service: GetPopularDetailService) => {
    expect(service).toBeTruthy();
  }));
});
