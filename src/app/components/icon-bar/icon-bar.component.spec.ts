import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBarComponent } from './icon-bar.component';
import { MyMaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { NotesSerivesService } from 'src/app/services/notes-serives.service';

describe('IconBarComponent', () => {
  let component: IconBarComponent;
  let fixture: ComponentFixture<IconBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBarComponent ],
      imports:[MyMaterialModule, RouterTestingModule,HttpClientTestingModule, FormsModule,
        ReactiveFormsModule,MatCheckboxModule],
        providers:[NotesSerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
