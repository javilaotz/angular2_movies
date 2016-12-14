/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPopularService } from './get-popular.service';

describe('GetPopularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPopularService]
    });
  });

  it('should ...', inject([GetPopularService], (service: GetPopularService) => {
    expect(service).toBeTruthy();
  }));
});
