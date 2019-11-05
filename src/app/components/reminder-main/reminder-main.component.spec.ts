import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderMainComponent } from './reminder-main.component';

describe('ReminderMainComponent', () => {
  let component: ReminderMainComponent;
  let fixture: ComponentFixture<ReminderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
