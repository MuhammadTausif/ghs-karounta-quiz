
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MyTestNavComponent } from './my-test-nav.component';

describe('MyTestNavComponent', () => {
  let component: MyTestNavComponent;
  let fixture: ComponentFixture<MyTestNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MyTestNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
