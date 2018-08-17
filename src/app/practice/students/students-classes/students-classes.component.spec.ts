import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsClassesComponent } from './students-classes.component';

describe('StudentsClassesComponent', () => {
  let component: StudentsClassesComponent;
  let fixture: ComponentFixture<StudentsClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
