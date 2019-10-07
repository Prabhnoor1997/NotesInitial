import { TestBed } from '@angular/core/testing';

import { NotesSerivesService } from './notes-serives.service';

describe('NotesSerivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesSerivesService = TestBed.get(NotesSerivesService);
    expect(service).toBeTruthy();
  });
});
