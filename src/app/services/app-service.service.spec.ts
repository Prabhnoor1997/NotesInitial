import { TestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppServiceService', () => {
 
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));
  
  it('should be created', () => {
    const service: AppServiceService = TestBed.get(AppServiceService);
    expect(service).toBeTruthy();
  });
});
