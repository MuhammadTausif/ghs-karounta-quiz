import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6FireBase2SetupComponent } from './angular6-fire-base2-setup.component';

describe('Angular6FireBase2SetupComponent', () => {
  let component: Angular6FireBase2SetupComponent;
  let fixture: ComponentFixture<Angular6FireBase2SetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular6FireBase2SetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular6FireBase2SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
