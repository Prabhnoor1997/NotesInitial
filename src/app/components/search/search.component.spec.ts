import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { DisplayComponent } from '../display/display.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { IconBarComponent } from '../icon-bar/icon-bar.component';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ,DisplayComponent,IconBarComponent],
      imports:[MyMaterialModule ,FormsModule, ReactiveFormsModule ,HttpClientTestingModule

      ],
      providers:[NotesSerivesService,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
