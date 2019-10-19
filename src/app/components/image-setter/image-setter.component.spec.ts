import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSetterComponent } from './image-setter.component';

describe('ImageSetterComponent', () => {
  let component: ImageSetterComponent;
  let fixture: ComponentFixture<ImageSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSetterComponent ]
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
