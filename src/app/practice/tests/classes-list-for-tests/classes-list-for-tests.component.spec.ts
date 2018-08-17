import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesListForTestsComponent } from './classes-list-for-tests.component';

describe('ClassesListForTestsComponent', () => {
  let component: ClassesListForTestsComponent;
  let fixture: ComponentFixture<ClassesListForTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesListForTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesListForTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
