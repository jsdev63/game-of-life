import { TestBed, inject } from '@angular/core/testing';

import { GenerationService } from './generation.service';

describe('GenerationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerationService]
    });
  });

  it('should ...', inject([GenerationService], (service: GenerationService) => {
    expect(service).toBeTruthy();
  }));
});
