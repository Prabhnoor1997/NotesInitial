import { TestBed } from '@angular/core/testing';

import { NotesSerivesService } from './notes-serives.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotesSerivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[NotesSerivesService]
  }));

  it('should be created', () => {
    const service: NotesSerivesService = TestBed.get(NotesSerivesService);
    expect(service).toBeTruthy();
  });
});
