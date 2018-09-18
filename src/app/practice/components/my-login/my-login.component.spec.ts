import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoginComponent } from './my-login.component';

describe('MyLoginComponent', () => {
  let component: MyLoginComponent;
  let fixture: ComponentFixture<MyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
