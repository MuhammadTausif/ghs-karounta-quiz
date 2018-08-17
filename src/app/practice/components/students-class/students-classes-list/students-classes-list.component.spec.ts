import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsClassesListComponent } from './students-classes-list.component';

describe('StudentsClassesListComponent', () => {
  let component: StudentsClassesListComponent;
  let fixture: ComponentFixture<StudentsClassesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsClassesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsClassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
