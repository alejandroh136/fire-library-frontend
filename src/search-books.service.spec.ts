import { TestBed } from '@angular/core/testing';

import { SearchBooksService } from './app/services/search-books-result.service';

describe('SearchBooksService', () => {
  let service: SearchBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
