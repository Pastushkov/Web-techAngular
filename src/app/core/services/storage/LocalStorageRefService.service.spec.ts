/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageRefServiceService } from './LocalStorageRefService.service';

describe('Service: LocalStorageRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageRefServiceService]
    });
  });

  it('should ...', inject([LocalStorageRefServiceService], (service: LocalStorageRefServiceService) => {
    expect(service).toBeTruthy();
  }));
});
