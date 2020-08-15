import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCourseComponent } from './js-course.component';

describe('JsCourseComponent', () => {
  let component: JsCourseComponent;
  let fixture: ComponentFixture<JsCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
