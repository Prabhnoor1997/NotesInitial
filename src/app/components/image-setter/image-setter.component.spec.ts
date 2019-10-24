import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSetterComponent } from './image-setter.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';
import {ImageCropperComponent} from 'ngx-image-cropper';

describe('ImageSetterComponent', () => {
  let component: ImageSetterComponent;
  let fixture: ComponentFixture<ImageSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSetterComponent ,ImageCropperComponent],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientTestingModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule,BrowserAnimationsModule],
        providers: [ NotesSerivesService,
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          { provide: MatDialog, useValue: {} }
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
