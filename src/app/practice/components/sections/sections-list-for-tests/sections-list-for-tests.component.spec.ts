import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsListForTestsComponent } from './sections-list-for-tests.component';

describe('SectionsListForTestsComponent', () => {
  let component: SectionsListForTestsComponent;
  let fixture: ComponentFixture<SectionsListForTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsListForTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsListForTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
