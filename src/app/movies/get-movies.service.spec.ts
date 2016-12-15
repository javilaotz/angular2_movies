/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetMoviesService } from './get-movies.service';

describe('GetMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMoviesService]
    });
  });

  it('should ...', inject([GetMoviesService], (service: GetMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
