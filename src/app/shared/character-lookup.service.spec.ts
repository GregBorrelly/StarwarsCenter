import { TestBed } from '@angular/core/testing';

import { CharacterLookupService } from './character-lookup.service';

describe('CharacterLookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterLookupService = TestBed.get(CharacterLookupService);
    expect(service).toBeTruthy();
  });
});
