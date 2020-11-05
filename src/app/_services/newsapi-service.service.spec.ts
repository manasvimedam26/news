/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsapiServiceService } from './newsapi-service.service';

describe('Service: NewsapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsapiServiceService]
    });
  });

  it('should ...', inject([NewsapiServiceService], (service: NewsapiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
