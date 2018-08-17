import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersListForTestsComponent } from './chapters-list-for-tests.component';

describe('ChaptersListForTestsComponent', () => {
  let component: ChaptersListForTestsComponent;
  let fixture: ComponentFixture<ChaptersListForTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaptersListForTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersListForTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
