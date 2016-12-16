/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetSeriesDetailService } from './get-series-detail.service';

describe('GetSeriesDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSeriesDetailService]
    });
  });

  it('should ...', inject([GetSeriesDetailService], (service: GetSeriesDetailService) => {
    expect(service).toBeTruthy();
  }));
});
