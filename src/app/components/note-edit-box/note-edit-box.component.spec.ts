import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueComponent } from './note-edit-box.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconBarComponent } from '../icon-bar/icon-bar.component';
import { MatMenuModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { MyMaterialModule } from 'src/app/material/material.module';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('NoteEditBoxComponent', () => {
  let component: DialogueComponent;
  let fixture: ComponentFixture<DialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogueComponent,IconBarComponent ]
      ,
      imports:[MyMaterialModule, TextFieldModule,ReactiveFormsModule,FormsModule
        ,MatMenuModule,HttpClientTestingModule]
      ,
      providers: [ NotesSerivesService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: {} }
      ], })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
