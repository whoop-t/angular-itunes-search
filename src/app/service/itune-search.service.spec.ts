import { TestBed } from '@angular/core/testing';

import { ItuneSearchService } from './itune-search.service';

describe('ItuneSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItuneSearchService = TestBed.get(ItuneSearchService);
    expect(service).toBeTruthy();
  });
});
