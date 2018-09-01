import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListInClassComponent } from './subjects-list-in-class.component';

describe('SubjectsListInClassComponent', () => {
  let component: SubjectsListInClassComponent;
  let fixture: ComponentFixture<SubjectsListInClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListInClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListInClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
