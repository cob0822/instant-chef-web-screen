import { TestBed } from '@angular/core/testing';

import { AddGenreDialogService } from './add-genre-dialog.service';

describe('AddGenreDialogService', () => {
  let service: AddGenreDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGenreDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
