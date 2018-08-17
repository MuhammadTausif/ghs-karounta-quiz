import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListForTestsComponent } from './subjects-list-for-tests.component';

describe('SubjectsListForTestsComponent', () => {
  let component: SubjectsListForTestsComponent;
  let fixture: ComponentFixture<SubjectsListForTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListForTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListForTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
