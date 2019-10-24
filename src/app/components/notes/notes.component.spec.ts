import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './notes.component';
import { NoteFieldComponent } from '../note-field/note-field.component';
import { DisplayComponent } from '../display/display.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';
import { IconBarComponent } from '../icon-bar/icon-bar.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent,NoteFieldComponent,DisplayComponent,IconBarComponent ],
      imports: [FormsModule,TextFieldModule,
        MyMaterialModule,FormsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule]
      ,providers:[NotesSerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
