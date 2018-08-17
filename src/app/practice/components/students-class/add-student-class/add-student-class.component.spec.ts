import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentClassComponent } from './add-student-class.component';

describe('AddStudentClassComponent', () => {
  let component: AddStudentClassComponent;
  let fixture: ComponentFixture<AddStudentClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
