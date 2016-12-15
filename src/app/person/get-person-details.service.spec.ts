/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPersonDetailsService } from './get-person-details.service';

describe('GetPersonDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPersonDetailsService]
    });
  });

  it('should ...', inject([GetPersonDetailsService], (service: GetPersonDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
