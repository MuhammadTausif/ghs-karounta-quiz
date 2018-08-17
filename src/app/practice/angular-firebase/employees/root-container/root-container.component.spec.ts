import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootContainerComponent } from './root-container.component';

describe('RootContainerComponent', () => {
  let component: RootContainerComponent;
  let fixture: ComponentFixture<RootContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
