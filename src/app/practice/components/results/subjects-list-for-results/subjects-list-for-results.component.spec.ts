import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListForResultsComponent } from './subjects-list-for-results.component';

describe('SubjectsListForResultsComponent', () => {
  let component: SubjectsListForResultsComponent;
  let fixture: ComponentFixture<SubjectsListForResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListForResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListForResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
