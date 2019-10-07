import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFieldComponent } from './note-field.component';

describe('NoteFieldComponent', () => {
  let component: NoteFieldComponent;
  let fixture: ComponentFixture<NoteFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFieldComponent ]
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
