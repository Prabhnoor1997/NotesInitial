import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetComponent } from './reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MyMaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
      imports: [FormsModule,TextFieldModule,
        MyMaterialModule,FormsModule,BrowserAnimationsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule]
      ,providers: [NotesSerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
