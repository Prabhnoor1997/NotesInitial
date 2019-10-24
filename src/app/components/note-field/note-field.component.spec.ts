import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TextFieldModule} from '@angular/cdk/text-field';
import { NoteFieldComponent } from './note-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconBarComponent } from '../icon-bar/icon-bar.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NoteFieldComponent', () => {
  let component: NoteFieldComponent;
  let fixture: ComponentFixture<NoteFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFieldComponent ,IconBarComponent],
      imports: [FormsModule,TextFieldModule,
        MyMaterialModule,FormsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule]
      ,providers:[NotesSerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
