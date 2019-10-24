import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {IconBarComponent} from '../icon-bar/icon-bar.component'
import { ArchiveComponent } from './archive.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NotesSerivesService} from '../../services/notes-serives.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveComponent ,IconBarComponent],
      imports:[
        MyMaterialModule,
        FormsModule,
        ReactiveFormsModule, HttpClientTestingModule,RouterTestingModule
      ],
      providers:[
        NotesSerivesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
